import { FC, useEffect, useReducer } from "react";
import { PEventsListWindow } from "./eventslistview/PEventsListWindow";
import { EventsProxy, IEventFetch } from "./interfaces/IEventFetch";
import { UShowEventList } from "./usecases/UShowEventList";
import { ScreenId } from "./types/ScreenId";
import { VEventsListWindow } from "./eventslistview/VEventsListWindow";
import { USignUpForEvent } from "./usecases/USignUpForEvent";
import { EventRegistrationProxy, IEventRegistration } from "./interfaces/IEventRegistration";
import { PSignUpWindow } from "./signupview/PSignUpWindow";
import { VEventSignUpWindow } from "./signupview/VEventSignUpWindow";
import { updateUSView } from "./signupview/CEventSignUpWindow";
import { SignUpState } from "./types/SignUpState";
import { VEventMenuWindow } from "./panelview/menu/VEventMenuWindow";
import { UEventMenuWindow } from "./panelview/menu/UEventMenuWindow";
import { PEventMenuWindow } from "./panelview/menu/PEventMenuWindow";
import { IEventPanel, MockedAPI } from "./panelview/menu/IEventPanel";
import { useLocation } from "react-router";
import { VEventPanelWindow } from "./panelview/panel/VEventPanelWindow";
import { useNavigate } from "react-router-dom";

const pEL: PEventsListWindow = new PEventsListWindow();

const url = "http://localhost:4200/api";

const eProxy = new EventsProxy(url);

const iEF: IEventFetch = eProxy;

const uSE: UShowEventList = new UShowEventList(pEL, iEF);

const pSU: PSignUpWindow = new PSignUpWindow();

const eRegistration = new EventRegistrationProxy(url);
const iER: IEventRegistration = eRegistration;

const uSU: USignUpForEvent = new USignUpForEvent(pSU, iER);

const iEM: IEventPanel = new MockedAPI();
const pEM: PEventMenuWindow = new PEventMenuWindow();

const uEM: UEventMenuWindow = new UEventMenuWindow(pEM, iEM);

function switchView(state: ScreenId, action: ScreenId) {
  let newState = state;
  switch (action) {
    case ScreenId.EVENT_SIGN_UP_VIEW:
      newState = ScreenId.EVENT_SIGN_UP_VIEW;
      break;
    case ScreenId.EVENT_LIST_VIEW:
      newState = ScreenId.EVENT_LIST_VIEW;
      break;
    case ScreenId.EVENT_MENU_VIEW:
      newState = ScreenId.EVENT_MENU_VIEW;
      break;
    case ScreenId.EVENT_PANEL_VIEW:
      newState = ScreenId.EVENT_PANEL_VIEW;
      break;
  }
  return newState;
}

export const InnerApp: FC = () => {

  const location = useLocation();
  const navigation = useNavigate();

  const [_state, globalUpdateView] = useReducer(
    switchView,
    location.pathname === "/panel" ? ScreenId.EVENT_MENU_VIEW : ScreenId.EVENT_LIST_VIEW
  );

  pEL.injectGlobalUpdateView(globalUpdateView);
  pSU.injectGlobalUpdateView(globalUpdateView);
  pEM.injectGlobalUpdateView(globalUpdateView);

  const [usData, usUpdateView] = useReducer(updateUSView, new SignUpState());


  useEffect(() => {
    if (_state === ScreenId.MAIN) {
      navigation("/");
    }

  }, [_state, navigation]);

  return (
    <div>
      {_state === ScreenId.EVENT_LIST_VIEW && <>
        <VEventsListWindow
          isActive={true}
          pEL={pEL}
          uSE={uSE}
          uSU={uSU}
          pSU={pSU}
          usData={usData}
          usUpdateView={usUpdateView}
        />
        <VEventSignUpWindow
          pSU={pSU}
          usData={usData}
          usUpdateView={usUpdateView}
          uSU={uSU}
        /></>}
      {_state === ScreenId.EVENT_MENU_VIEW &&
        <VEventMenuWindow uEventMenu={uEM} pEventMenu={pEM} />
      }
      {
        _state === ScreenId.EVENT_PANEL_VIEW &&
        <VEventPanelWindow init_Data={pEM.pState} />
      }
    </div>
  );
};
