import express from "express";
import eventController from "../controllers/event.controller";
import paymentController from "../controllers/payment.controller";

const eventRouter = express.Router();

eventRouter.use((_req, _res, next) => {
  console.log(Date.now(), _req.url);
  next();
});

eventRouter.get("/", eventController.getEventList);

eventRouter.post("/manager/launch", eventController.launchEvent);
eventRouter.post("/manager/", eventController.getEventManagementDetails);

eventRouter.post("/pay/:uid/:eid/:method", paymentController.payForEvent);
eventRouter.get(
  "/confirm/:uid/:eid",
  paymentController.confirmThatPaymentExists
);

eventRouter.get("/:id", eventController.getDetailEvent);
eventRouter.post("/:uid/:eid", eventController.signUp);

export default eventRouter;
