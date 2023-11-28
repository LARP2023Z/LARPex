import { cleanEnv, port, url } from "envalid";

const env = cleanEnv(process.env, {
  BE_GAMES___PORT: port({ desc: "Server Port" }),
  BE_GAMES___PRISMA_STUDIO_PORT: port({ desc: "DB interface Port" }),
  BE_GAMES___DATABASE_URL: url({ desc: "DB url" }),
});

export function printEnvironmentVariables() {
  console.log(
    `Local GAMES API on: http://localhost:${env.BE_GAMES___PORT}/events`
  );
  console.log(
    `Local DB GAMES INTERFACE on: http://localhost:${env.BE_GAMES___PRISMA_STUDIO_PORT}`
  );
}

export default env;
