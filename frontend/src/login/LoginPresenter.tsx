import { LoginWindow } from './presentation/LoginWindow';
import { ILoginUserMock } from './data/Repository/ILoginUserMock';

export const LoginPresenter = () => {
  const repository = new ILoginUserMock();

  return <LoginWindow repository={repository} />;
};
