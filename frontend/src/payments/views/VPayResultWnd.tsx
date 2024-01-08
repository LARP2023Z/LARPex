import { Window, WindowContent, WindowHeader } from 'react95';
import { Space } from 'src/common/Space';
import Draggable from 'react-draggable';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function VPayResultWnd() {
  const [searchParams] = useSearchParams();

  const location = useLocation();

  console.log(location);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setTimeout(() => {
        const urlParams = new URLSearchParams();

        urlParams.append('success', 'true');
        urlParams.append('eventId', location.state.eventId);

        navigate(`/events?${urlParams.toString()}`);
      }, 3000);
    } else {
      setTimeout(() => {
        const urlParams = new URLSearchParams();

        urlParams.append('success', 'false');
        urlParams.append('eventId', location.state.eventId);

        navigate(`/events?${urlParams.toString()}`);
      }, 3000);
    }
  });

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
