import express from "express";

import eventRouter from "./routes/event.route";
import env from "./utils/env";
import authenticationValidator from "./middlewares/auth";

const app = express();
const port = env.SERVER_PORT;

app.disable("x-powered-by");
app.use(express.json());
app.use(authenticationValidator);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use("/events", eventRouter);
