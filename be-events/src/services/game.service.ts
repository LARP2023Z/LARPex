// import { Game } from "@prisma/client";
// import IGamesFetch from "../interfaces/gamesFetch.interface";
// import prisma from "../utils/prisma";

// export const gamesFetch: IGamesFetch = {
//   fetchGameDetails: async function (gameId: string): Promise<Game> {
//     try {
//       const game = await prisma.game.findUniqueOrThrow({
//         where: {
//           id: Number(gameId),
//         },
//       });
//       return game;
//     } catch (error) {
//       throw new Error(`Cannot fetch game by id=${gameId}.`);
//     }
//   },
// };
