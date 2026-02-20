
# Next.js E-Commerce Project

This is a modern e-commerce web application built with [Next.js](https://nextjs.org), featuring authentication, product search, order management, comments, and internationalization.

## Features

- **Authentication:** GitHub OAuth via Better Auth
- **Product Catalog:** Browse, search, and view product details
- **Order Management:** Place and view orders
- **Comments:** Add/view comments on products
- **Internationalization:** Supports Turkish and English (next-intl)
- **PostgreSQL Database:** Managed with Prisma ORM
- **Responsive UI:** Built with Tailwind CSS and Radix UI
- **Dockerized:** Easy deployment with Docker Compose

## Folder Structure

- `app/` — Main Next.js app pages (products, orders, comments, auth, API routes)
- `components/` — UI components (Header, Auth, Search, Cards, etc.)
- `lib/` — Utility functions, database, authentication logic
- `prisma/` — Prisma schema and migrations
- `public/` — Static assets (images, icons)
- `shared/` — Shared React components (ProductCard, SearchBar, etc.)
- `messages/` — i18n translation files (`en.json`, `tr.json`)
- `interfaces/` — TypeScript interfaces
- `i18n/` — Internationalization config

## Environment Setup

Create a `.env` file in the project root with your secrets:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:yourpassword@host.docker.internal:5432/e_commerce_web_site
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
FAKE_STORE_API_URL=https://fakestoreapi.com
```

## Docker Compose Usage

1. Build the Docker image:
	```bash
	docker build -t ghcr.io/tugba-koc/nextjs-project:latest .
	```
2. Start with Docker Compose:
	```bash
	docker-compose --env-file .env up
	```
	This launches both the Next.js app and PostgreSQL database.

## Development Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run test` — Run tests
- `npm run type-check` — TypeScript type checking

## Tech Stack

- Next.js 16
- React 19
- Prisma ORM
- PostgreSQL
- Better Auth
- Tailwind CSS
- Radix UI
- next-intl (i18n)

## How to Contribute

1. Fork the repository
2. Clone your fork
3. Create a new branch for your feature/fix
4. Commit and push your changes
5. Open a Pull Request

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Better Auth](https://www.npmjs.com/package/better-auth)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/)

---

For any questions or issues, please open an issue or contact the maintainer.
