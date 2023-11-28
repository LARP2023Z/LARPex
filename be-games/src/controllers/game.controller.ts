import { Request, Response } from "express";
import { gamesFetch } from "../services/game.service";

const getGame = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const game = await gamesFetch.getGameDetails(id);
    res.json(game);
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

const getGamesList = async (_req: Request, res: Response) => {
  try {
    const gamesList = await gamesFetch.getGamesDetails();
    res.json(gamesList);
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

export default {
  getGame,
  getGamesList,
};
