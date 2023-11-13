import { Window, WindowContent, WindowHeader } from 'react95';
import { Space } from 'src/common/Space';
import Draggable from 'react-draggable';
import { useSearchParams } from 'react-router-dom';

export default function VPayResultWnd() {
  const [searchParams] = useSearchParams();

  switch (searchParams.get('success')) {
    case 'true':
      return (
        <Draggable>
          <Window>
            <WindowHeader>Płatność</WindowHeader>
            <WindowContent>
              <Space gap={8}>
                <p>Płatność zakończona sukcesem</p>
              </Space>
            </WindowContent>
          </Window>
        </Draggable>
      );
    case 'false':
      return (
        <Draggable>
          <Window>
            <WindowHeader>Płatność</WindowHeader>
            <WindowContent>
              <Space gap={8}>
                <p>Płatność zakończona niepowodzeniem</p>
              </Space>
            </WindowContent>
          </Window>
        </Draggable>
      );
    default:
      return (
        <Draggable>
          <Window>
            <WindowHeader>Płatność</WindowHeader>
            <WindowContent>
              <Space gap={8}>
                <p>Wystąpił błąd</p>
              </Space>
            </WindowContent>
          </Window>
        </Draggable>
      );
  }
}
