import { ILoginUser } from '../../domain/repository/ILoginUser';
import { LoginFormData } from '../../domain/model/LoginFormData';
import { LoginResponse } from '../../domain/model/LoginResponse';

export class ILoginUserMock implements ILoginUser {
  handleLogin(loginData: LoginFormData): Promise<LoginResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid =
          loginData.login === 'example' && loginData.password === 'password';

        if (isValid) {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Niepoprawne dane logowania' });
        }
      }, 1000);
    });
  }
}
