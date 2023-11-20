import { ILoginUser } from '../../domain/repository/ILoginUser';
import { LoginFormData } from '../../domain/model/LoginFormData';
import { loginUserUseCase } from '../../domain/useCase/loginUserUseCase';
import { useClippy } from '@react95/clippy';
import { LoginResponseStatus } from '../../domain/model/LoginResponseStatus';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const useLoginController = (repository: ILoginUser) => {
  const { clippy } = useClippy();
  const navigate = useNavigate();
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const handleLogin = async (formData: LoginFormData) => {
    const loginStatus = await loginUserUseCase(repository, formData);
    clippy.speak(loginStatus);

    switch (loginStatus) {
      case LoginResponseStatus.ERROR:
        clippy.play('Alert');
        break;
      case LoginResponseStatus.INVALID_CREDENTIALS:
        clippy.play('CheckingSomething');
        break;
      case LoginResponseStatus.SUCCESS:
        localStorage.setItem('userName', formData.login);
        clippy.play('Congratulate');
        await delay(3000);
        navigate('/');
        break;
    }
  };

  const { handleSubmit: handleLoginSubmit, control: loginControl } =
    useForm<LoginFormData>({
      defaultValues: {
        login: '',
        password: '',
      },
    });

  return { handleLogin, loginControl, handleLoginSubmit };
};
