import express from "express";
import eventController from "../controllers/event.controller";
import paymentController from "../controllers/payment.controller";

const eventRouter = express.Router();

eventRouter.use((_req, _res, next) => {
  console.log("Time: ", Date.now());
  next();
});

eventRouter.get("/", eventController.getEventList);
eventRouter.get("/:id", eventController.getDetailEvent);
eventRouter.post("/:uid/:eid", eventController.signUp);
eventRouter.post("/pay/:uid/:eid/:method", paymentController.payForEvent);
eventRouter.get(
  "/confirm/:uid/:eid",
  paymentController.confirmThatPaymentExists
);

export default eventRouter;
