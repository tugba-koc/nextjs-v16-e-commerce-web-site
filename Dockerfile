# --- BUILDER STAGE ---
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache openssl

COPY package*.json ./
COPY prisma ./prisma/ 
RUN npm install && npm cache clean --force
RUN npx prisma generate

COPY . .
RUN npm run build

# --- RUNNER STAGE ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache openssl

RUN npm install -g prisma@7.4.1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD ["node", "server.js"]