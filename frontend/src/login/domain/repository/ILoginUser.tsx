import { LoginFormData } from '../model/LoginFormData';
import { LoginResponse } from '../model/LoginResponse';

export interface ILoginUser {
  handleLogin(loginData: LoginFormData): Promise<LoginResponse>;
}
