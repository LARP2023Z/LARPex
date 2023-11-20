import {
  Button,
  GroupBox,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
  Separator,
} from 'react95';
import Draggable from 'react-draggable';
import { Controller } from 'react-hook-form';
import { Space } from 'src/common/Space';
import { ILoginUser } from '../domain/repository/ILoginUser';
import { useLoginController } from './hook/useLoginController';
import { useNavigate } from 'react-router-dom';

type LoginRegisterWindowProps = {
  repository: ILoginUser;
};
export const LoginWindow = ({ repository }: LoginRegisterWindowProps) => {
  const { handleLogin, loginControl, handleLoginSubmit } =
    useLoginController(repository);
  const navigate = useNavigate();

  return (
    <Draggable>
      <Window>
        <WindowHeader>Logowanie</WindowHeader>
        <WindowContent>
          <Button
            onClick={() => {
              navigate('/');
            }}
            variant="raised"
          >
            Wróć
          </Button>
          <Separator />
          <form onSubmit={handleLoginSubmit(handleLogin)}>
            <Space gap={8}>
              <GroupBox label="Login">
                <Controller
                  name="login"
                  control={loginControl}
                  render={({ field }) => <TextInput {...field} />}
                />
              </GroupBox>
              <GroupBox label="Hasło">
                <Controller
                  name="password"
                  control={loginControl}
                  render={({ field }) => (
                    <TextInput type={'password'} {...field} />
                  )}
                />
              </GroupBox>
              <Button fullWidth type="submit">
                Zaloguj
              </Button>
            </Space>
          </form>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
