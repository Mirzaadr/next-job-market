# NextJS Job Market App

This is a basic nextjs starter project to build another app. 
Currently running on Next 15.1.5 and React 19.0.0.

## Getting Started

### Auth JS Environment

add AUTH_SECRET to .env or .env.local file, or you can generate one via the official Auth.js CLI running:

```bash
npx auth secret
```
for other environment variables (ex. OAuth), check [documentation](https://authjs.dev/getting-started/authentication/oauth).

### Prisma Environment
Add database url to .env or .env.local file. We are using postgres database so the connection url may look like this

```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

### Running the application
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

