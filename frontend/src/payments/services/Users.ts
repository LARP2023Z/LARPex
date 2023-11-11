import dayjs from "dayjs";
import { UserDto } from "../dtos/userDtos";
import { IUsers } from "./IUsers";

export class UserProxyMock implements IUsers {
  getUser(userId: string): Promise<UserDto> {
    return Promise.resolve(new UserDto(userId, "alias", "name", "surname", dayjs()));
  }
}
