import { ILoginUser } from '../repository/ILoginUser';
import { LoginFormData } from '../model/LoginFormData';
import { LoginResponseStatus } from '../model/LoginResponseStatus';

export async function loginUserUseCase(
  repository: ILoginUser,
  formData: LoginFormData
) {
  try {
    const response = await repository.handleLogin(formData);

    if (response.success) {
      return LoginResponseStatus.SUCCESS;
    } else {
      return LoginResponseStatus.INVALID_CREDENTIALS;
    }
  } catch (error) {
    console.error('Wystąpił błąd podczas logowania:', error);
    return LoginResponseStatus.ERROR;
  }
}
