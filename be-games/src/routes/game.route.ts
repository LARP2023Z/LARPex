import express from "express";
import gameController from "../controllers/game.controller";

const gameRouter = express.Router();

gameRouter.use((_req, _res, next) => {
  console.log("Time: ", Date.now());
  next();
});

gameRouter.get("/", gameController.getGamesList);
gameRouter.get("/:id", gameController.getGame);

export default gameRouter;
