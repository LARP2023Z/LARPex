import express from "express";

import gameRouter from "./routes/game.route";
import env, { printEnvironmentVariables } from "./utils/env";
import authenticationValidator from "./middlewares/auth";

const app = express();
const port = env.BE_GAMES___PORT;

app.disable("x-powered-by");

app.use(express.json());
app.use(authenticationValidator);
app.use("/games", gameRouter);

app.listen(port, () => {
  printEnvironmentVariables();
});
