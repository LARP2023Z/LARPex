import {
  GetGameDetailsResponse,
  GetGamesDetailsResponse,
} from "../dataobjects";

export default interface IGamesFetch {
  getGameDetails(gameId: string): Promise<GetGameDetailsResponse>;
  getGamesDetails(): Promise<GetGamesDetailsResponse>;
}
