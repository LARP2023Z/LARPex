import express from "express";
import eventController from "../controllers/event.controller";
import auth from "../middlewares/auth";
// import validate from "../middlewares/validate";

const eventRouter = express.Router();

eventRouter.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

eventRouter.get("/", eventController.getEventList);
eventRouter.get("/:id", eventController.getDetailEvent);
eventRouter.post("/:uid/:eid", eventController.signUp);
// eventRouter.post("/:uid/:eid", validate(), eventController.signUp);

export default eventRouter;
