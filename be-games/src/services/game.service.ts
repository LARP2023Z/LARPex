import type {
  GetGameDetailsResponse,
  GetGamesDetailsResponse,
} from "../dataobjects";
import IGamesFetch from "../interfaces/gamesFetch.interface";
import prisma from "../utils/prisma";

export const gamesFetch: IGamesFetch = {
  getGameDetails: async function (
    gameId: string
  ): Promise<GetGameDetailsResponse> {
    try {
      const game = await prisma.game.findUniqueOrThrow({
        where: { id: gameId },
      });
      return game;
    } catch (error) {
      throw new Error("Error to fetch game");
    }
  },
  getGamesDetails: async function (): Promise<GetGamesDetailsResponse> {
    try {
      const games = await prisma.game.findMany();
      return games;
    } catch (error) {
      throw new Error("Error to fetch games");
    }
  },
};
