import dayjs from 'dayjs';
import { UserDto } from '../dtos/userDtos';
import { IUsers } from './IUsers';
import { api } from 'src/api/apiClient';

export class UserProxyMock implements IUsers {
  getUser(userId: string): Promise<UserDto> {
    api.users.getUserDetails(userId);

    return Promise.resolve(
      new UserDto(userId, 'alias', 'name', 'surname', dayjs())
    );
  }
}
