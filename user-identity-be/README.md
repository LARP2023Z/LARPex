# Users and identity service

This service contains users and authentication/authorization logic.

## How to run

### Prerequisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/) (for formatting - use nvm for convenience, you can install prettier globally as well):
  - [nvm](https://github.com/nvm-sh/nvm)
  - [prettier](https://prettier.io/docs/en/install.html)
  - [prettier-java](https://github.com/jhipster/prettier-java)
    - This command does it all for you: `npm install -g prettier prettier-plugin-java`
  // eclipse temurin
- JDK 17 - Any

### Run

#### Dev profile (assumes you have a local PostgreSQL database running)

```bash
./gradlew bootRun --args='--spring.profiles.active=dev'
```

#### Prod profile 

Inject the `compose.yaml` file into the main deployment

### Tests

```bash
./gradlew test
```

### Build Docker image

```bash
docker compose up --build
```