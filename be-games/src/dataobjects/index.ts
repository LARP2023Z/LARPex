import { z } from "zod";
const getGameDetailsResponseSchema = z.object({
  id: z.string(),
  author: z.string(),
  max_players: z.number(),
  name: z.string(),
});
const getGamesDetailsResponseSchema = z.array(getGameDetailsResponseSchema);

export type GetGameDetailsResponse = z.infer<
  typeof getGameDetailsResponseSchema
>;
export type GetGamesDetailsResponse = z.infer<
  typeof getGamesDetailsResponseSchema
>;
