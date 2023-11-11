import { UserDto } from "../dtos/userDtos";

export interface IUsers {
  getUser(userId: string): Promise<UserDto>;
}
