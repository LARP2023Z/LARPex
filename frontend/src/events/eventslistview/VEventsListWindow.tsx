import { FC, useEffect, useMemo, useReducer, useState } from 'react';
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
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PEventsListWindow } from './PEventsListWindow';
import { UShowEventList } from '../usecases/UShowEventList';
import { CEventsListWindow, updateELView } from './CEventsListWindow';
import { EventListState } from '../types/EventListState';
import { USignUpForEvent } from '../usecases/USignUpForEvent';
import { PSignUpWindow } from '../signupview/PSignUpWindow';
import { CSignUpWindow } from '../signupview/CEventSignUpWindow';
import { SignUpState } from '../types/SignUpState';
import { currentUserId } from 'src/api/user';

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

  const [searchParams] = useSearchParams();

  const eventId = searchParams.get('eventId');
  const paymentSuccess = searchParams.get('success');

  const [elData, elUpdateView] = useReducer(updateELView, new EventListState());

  const [magic, setMagic] = useState(false);
  const [name, setName] = useState('');

  pEL.injectDataHandles(elData, elUpdateView);
  const [onLoadPageEvent, onClickEvent] = useMemo(
    () => CEventsListWindow(uSE),
    [uSE]
  );

  pSU.injectDataHandles(usData, usUpdateView);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [onSignUpEvent, closeWindow] = useMemo(() => CSignUpWindow(uSU), [uSU]);

  useEffect(() => {
    if (onLoadPageEvent) {
      onLoadPageEvent(
        'Zapytać bo nie powinno być argumentów a się wykrzacza bez XD'
      );
    }
  }, [onLoadPageEvent]);

  useEffect(() => {
    if (eventId && paymentSuccess) {
      if (paymentSuccess === 'true') {
        onSignUpEvent({
          eventId: eventId,
          userId: currentUserId,
        });
      }
    }
  }, [eventId, paymentSuccess, onSignUpEvent]);

  useEffect(() => {
    if (elData && elData.eventsList) {
      console.log(elData.selectedEventId);
      console.log(elData.eventsList);
      const f = elData.eventsList.filter(
        (ev) => ev.uuid === elData.selectedEventId
      );
      if (
        f != null &&
        f.length === 1 &&
        f[0].status &&
        f[0].status === 'InProgress'
      ) {
        setMagic(true);
        setName(f[0].name);
      } else {
        setMagic(false);
      }
      console.log(f);
    }
  }, [elData]);
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
                        {/*{data.uuid};*/}
                        {/*{data.host};*/}
                        {data.name}; {data.startDate.split('T')[0].toString()};{' '}
                        {data.stopDate.split('T')[0].toString()}
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
                  if (magic) {
                    console.log(elData);
                    navigate('/panelActiveStarted/' + name);
                  } else if (elData && elData.selectedEventId) {
                    navigate(`/payments?eventId=${elData.selectedEventId}`);
                    // onSignUpEvent({
                    //   eventId: elData.selectedEventId,
                    //   userId: '8ebdb302-2589-4255-b060-d70d1bc974b8',
                    // });
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
                {elData && elData.selectedEventId && magic
                  ? 'Dołącz do wydarzenia'
                  : 'Zapisz się'}
              </Button>
            </div>
          </div>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
