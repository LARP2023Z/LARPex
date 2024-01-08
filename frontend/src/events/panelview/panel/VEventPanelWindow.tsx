import Draggable from 'react-draggable';
import {
  MenuListItem,
  ScrollView,
  StyledButton,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import { FC, useMemo, useReducer, useState } from 'react';
import { EventPanelDataResponse } from '../../types/EventPanelDataResponse';
import { UEventPanelWindow } from './UEventPanelWindow';
import { PEventPanelWindow } from './PEventPanelWindow';
import { CEventMenuWindow } from '../menu/CEventMenuWindow';
import { MenuState } from '../../types/MenuState';
import { CEventPanelWindow, updateEPView } from './CEventPanelWindow';
import { useNavigate } from 'react-router-dom';

export const VEventPanelWindow: FC<{
  init_Data?: EventPanelDataResponse | undefined;
  uPanelWindow: UEventPanelWindow;
  pPanelWindow: PEventPanelWindow;
}> = ({ init_Data, uPanelWindow, pPanelWindow }) => {
  const [epData, epUpdateView] = useReducer(updateEPView, new MenuState());

  const navigate = useNavigate();

  const { onBack } = useMemo(
    () => CEventPanelWindow(uPanelWindow),
    [uPanelWindow]
  );

  const [isShowing, setIsShowing] = useState(0);

  const ThirdWindow = () => {
    return (
      <Draggable>
        <Window>
          <WindowHeader>Uruchomienie wydarzenia</WindowHeader>
          <WindowContent>
            <p>Wydarzenie zostało uruchomione</p>
            <StyledButton onClick={() => setIsShowing(0)}>ZAMKNIJ</StyledButton>
          </WindowContent>
        </Window>
      </Draggable>
    );
  };

  const ForthWindow = () => {
    return (
      <Draggable>
        <Window>
          <WindowHeader>Uruchomienie wydarzenia</WindowHeader>
          <WindowContent>
            <p>NIE UDAŁO SIĘ URUCHOMIĆ WYDARZENIA</p>
            <StyledButton onClick={() => setIsShowing(0)}>ZAMKNIJ</StyledButton>
          </WindowContent>
        </Window>
      </Draggable>
    );
  };

  const SecondWindows = () => {
    return (
      <Draggable>
        <Window>
          <WindowHeader>Uruchomienie wydarzenia</WindowHeader>
          <WindowContent>
            <p>Czy chcesz na pewno uruchomić wydarzenie?</p>
            <StyledButton
              onClick={() =>
                fetch('/api/events/manager/launch', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    eventId: init_Data?.id,
                  }),
                })
                  .then((result) => {
                    if (result.status === 200) {
                      setIsShowing(2);
                    } else {
                      setIsShowing(3);
                    }
                  })
                  .catch(() => setIsShowing(3))
              }
            >
              Tak
            </StyledButton>
            <StyledButton onClick={() => setIsShowing(0)}>Nie</StyledButton>
          </WindowContent>
        </Window>
      </Draggable>
    );
  };

  return (
    <>
      <Draggable>
        <Window>
          <WindowHeader>
            Panel - {init_Data ? init_Data.eventName : 'Wydarzenie 1'}
          </WindowHeader>
          <WindowContent>
            <StyledButton onClick={onBack}>Zamknij</StyledButton>
            <StyledButton>Usuń gracza</StyledButton>
            <StyledButton>Wyślij podpowiedź</StyledButton>
            <StyledButton onClick={() => setIsShowing(1)}>Uruchom</StyledButton>
            <StyledButton>Zakończ</StyledButton>
            <StyledButton>Wstrzymaj</StyledButton>
            <StyledButton onClick={() => navigate('/qr-code')}>
              Skanuj QR
            </StyledButton>
            <ScrollView style={{ width: '450px', height: '200px' }}>
              {init_Data &&
                init_Data.players &&
                init_Data.players.map((player) => (
                  <MenuListItem>
                    <p style={{ whiteSpace: 'nowrap' }}>
                      {player.name}; {player.character}; {player.job};{' '}
                      {player.className}
                    </p>
                  </MenuListItem>
                ))}
            </ScrollView>
          </WindowContent>
        </Window>
      </Draggable>
      ;{isShowing === 1 && <SecondWindows />}
      {isShowing === 2 && <ThirdWindow />}
      {isShowing === 3 && <ForthWindow />}
    </>
  );
};
