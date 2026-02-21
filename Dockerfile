FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache openssl

COPY package*.json ./
COPY prisma ./prisma/ 

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache openssl

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/messages ./messages
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/next-intl.config.ts ./
COPY --from=builder /app/prisma.config.ts ./
COPY --from=builder /app/prisma ./prisma

ARG DATABASE_URL
ARG GTHB_CLIENT_ID
ARG GTHB_CLIENT_SECRET
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_URL
ARG FAKE_STORE_API_URL


ENV DATABASE_URL=${DATABASE_URL}
ENV GTHB_CLIENT_ID=${GTHB_CLIENT_ID}        
ENV GTHB_CLIENT_SECRET=${GTHB_CLIENT_SECRET}
ENV BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
ENV BETTER_AUTH_URL=${BETTER_AUTH_URL}
ENV FAKE_STORE_API_URL=${FAKE_STORE_API_URL}

EXPOSE 3000

CMD ["sh", "-c", "npx prisma db push && node .next/standalone/server.js"]