# Run in root directory

## login to db in terminal

```bash
make d-db-games-login
```

## seed db +10

```bash
make d-db-games-seed
```

# Run locally

```bash
npm i
npm run dev
```

# Exposed

- api [http://localhost:8083/games](http://localhost:8086/events) | `http://localhost:${BE_EVENTS___PORT}/events`
- db interface [http://localhost:8084/](http://localhost:8087/) | `http://localhost:${BE_EVENTS___PRISMA_STUDIO_PORT}/`
