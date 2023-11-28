import express from "express";
import eventController from "../controllers/event.controller";

const eventRouter = express.Router();

eventRouter.use((_req, _res, next) => {
  console.log("Time: ", Date.now());
  next();
});

eventRouter.get("/", eventController.getEventList);
eventRouter.get("/:id", eventController.getDetailEvent);
eventRouter.post("/:uid/:eid", eventController.signUp);

export default eventRouter;
