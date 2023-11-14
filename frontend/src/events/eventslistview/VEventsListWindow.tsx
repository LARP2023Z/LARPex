import { FC, useEffect, useReducer } from 'react';
import {
  Button,
  MenuListItem,
  ScrollView,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';
import { PEventsListWindow } from './PEventsListWindow';
import { UShowEventList } from '../usecases/UShowEventList';
import { CEventsListWindow, updateELView } from './CEventsListWindow';
import { EventListState } from '../types/EventListState';
import { USignUpForEvent } from '../usecases/USignUpForEvent';
import { PSignUpWindow } from '../signupview/PSignUpWindow';
import { CSignUpWindow } from '../signupview/CEventSignUpWindow';
import { SignUpState } from '../types/SignUpState';

export const VEventsListWindow: FC<{
  isActive: boolean;
  pEL: PEventsListWindow;
  uSE: UShowEventList;
  pSU: PSignUpWindow;
  uSU: USignUpForEvent;
  usData: SignUpState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  usUpdateView: any;
}> = ({ pEL, uSE, pSU, uSU, usData, usUpdateView }) => {
  const navigate = useNavigate();

  const [elData, elUpdateView] = useReducer(updateELView, new EventListState());

  pEL.injectDataHandles(elData, elUpdateView);
  const [onLoadPageEvent, onClickEvent] = CEventsListWindow(uSE);

  pSU.injectDataHandles(usData, usUpdateView);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [onSignUpEvent, closeWindow] = CSignUpWindow(uSU);

  useEffect(() => {
    console.log(onLoadPageEvent);
    onLoadPageEvent(
      'Zapytać bo nie powinno być argumentów a się wykrzacza bez XD'
    );
  }, [onLoadPageEvent]);

  return (
    <Draggable>
      <Window>
        <WindowHeader>Lista wydarzeń</WindowHeader>
        <WindowContent>
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => {
                navigate('/');
              }}
              variant="raised"
            >
              Wróć
            </Button>
            <h4>od</h4>
            <TextInput
              value="16/10/2137"
              placeholder="__/__/____"
              disabled
              fullWidth={false}
            />
            <h4>do</h4>
            <TextInput
              value="16/10/2137"
              placeholder="__/__/____"
              disabled
              fullWidth={false}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 8,
            }}
          >
            <ScrollView style={{ width: '450px', height: '200px' }}>
              {elData &&
                elData.eventsList &&
                elData.eventsList.map((data) => {
                  return (
                    <MenuListItem
                      onClick={() => {
                        onClickEvent(data.uuid);
                      }}
                      key={data.uuid}
                      style={
                        elData && data.uuid === elData.selectedEventId
                          ? {
                              background: '#05007e',
                              color: 'white',
                            }
                          : {}
                      }
                    >
                      <p style={{ whiteSpace: 'nowrap' }}>
                        {data.uuid};{data.host};{data.name};
                        {data.startDate.toString()};{data.stopDate.toString()};
                      </p>
                    </MenuListItem>
                  );
                })}
            </ScrollView>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Button active={true}>Opis</Button>
              <br />
              <Button
                onClickCapture={() => {
                  if (elData && elData.selectedEventId) {
                    onSignUpEvent({
                      eventId: elData.selectedEventId,
                      userId: 'USERID',
                    });
                  }
                }}
                active={
                  !(
                    elData &&
                    elData.eventsList
                      .map((e) => e.uuid)
                      .includes(elData.selectedEventId)
                  )
                }
              >
                Zapisz się
              </Button>
            </div>
          </div>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
