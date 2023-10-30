import { FC, useCallback, useEffect, useMemo } from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable';
import { useClippy } from '@react95/clippy';

interface EventSignUpViewProps {
  status: EventType;
}

export enum EventType {
  ERROR = 'ERROR',
  NOT_AVALIABLE_PLACE = 'NOT_AVALIABLE_PLACE',
  SUCCESS = 'SUCCESS',
}

export const EventSignUpView: FC<EventSignUpViewProps> = ({ status }) => {
  const { clippy } = useClippy();

  const getTitle = useCallback(() => {
    switch (status) {
      case EventType.ERROR:
        return 'Niepowodzenie';
      case EventType.NOT_AVALIABLE_PLACE:
        return 'Brak miejsc';
      case EventType.SUCCESS:
        return 'Powodzenie';
    }
  }, [status]);

  const getBody = useCallback(() => {
    switch (status) {
      case EventType.ERROR:
        return 'W wyniku niepowodzenia płatności nie zapisano na wydarzenie.';

      case EventType.NOT_AVALIABLE_PLACE:
        return 'Niestety na wybrane wydarzenie nie ma już wolnych miejsc.';

      case EventType.SUCCESS:
        return 'Z powodzeniem zapisano na wydarzenie.';
    }
  }, [status]);

  const [title, body] = useMemo(
    () => [getTitle(), getBody()],
    [getTitle, getBody]
  );

  useEffect(() => {
    console.log(clippy.animations());
    switch (status) {
      case EventType.ERROR:
        clippy.play('Alert');
        break;
      case EventType.NOT_AVALIABLE_PLACE:
        clippy.play('CheckingSomething');
        break;
      case EventType.SUCCESS:
        clippy.play('Congratulate');
        break;
    }

    clippy.speak(`${title}. ${body}`);
  }, [body, clippy, status, title]);

  return (
    <Draggable>
      <Window>
        <WindowHeader>{title}</WindowHeader>
        <WindowContent>
          <p>{body}</p>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
