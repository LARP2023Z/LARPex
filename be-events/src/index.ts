import express from "express";

import eventRouter from "./routes/event.route";
import env, { printEnvironmentVariables } from "./utils/env";
import authenticationValidator from "./middlewares/auth";

const app = express();
const port = env.BE_EVENTS___PORT;

app.disable("x-powered-by");

app.use(express.json());
app.use(authenticationValidator);
app.use("/events", eventRouter);

app.listen(port, () => {
  printEnvironmentVariables();
});
