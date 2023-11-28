import { cleanEnv, port, url } from "envalid";

const env = cleanEnv(process.env, {
  BE_EVENTS___PORT: port({ desc: "Server Port" }),
  BE_EVENTS___PRISMA_STUDIO_PORT: port({ desc: "DB interface Port" }),
  BE_EVENTS___DATABASE_URL: url({ desc: "DB url" }),
});

export function printEnvironmentVariables() {
  console.log(
    `Local EVENTS API on: http://localhost:${env.BE_EVENTS___PORT}/events`
  );
  console.log(
    `Local DB EVENTS INTERFACE on: http://localhost:${env.BE_EVENTS___PRISMA_STUDIO_PORT}`
  );
}

export default env;
