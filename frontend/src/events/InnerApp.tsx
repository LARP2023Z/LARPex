import {FC, useReducer} from "react";
import {PEventsListWindow} from "./eventslistview/PEventsListWindow";
import {EventsProxy, IEventFetch} from "./interfaces/IEventFetch";
import {UShowEventList} from "./usecases/UShowEventList";
import {ScreenId} from "./types/ScreenId";
import {VEventsListWindow} from "./eventslistview/VEventsListWindow";
import {USignUpForEvent} from "./usecases/USignUpForEvent";
import {EventRegistrationProxy, IEventRegistration} from "./interfaces/IEventRegistration";
import {PSignUpWindow} from "./signupview/PSignUpWindow";
import {VEventSignUpWindow} from "./signupview/VEventSignUpWindow";
import {updateUSView} from "./signupview/CEventSignUpWindow";
import {SignUpState} from "./types/SignUpState";

import {AEvents} from "./interfaces/AEvents";

const pEL: PEventsListWindow = new PEventsListWindow();

const aEvent: AEvents = new AEvents("http://www.golestwory.pl", "userId")

const eProxy = new EventsProxy();
eProxy.injectApi(aEvent)
const iEF: IEventFetch = eProxy;

const uSE: UShowEventList = new UShowEventList(pEL, iEF);

const pSU: PSignUpWindow = new PSignUpWindow()

const eRegistration = new EventRegistrationProxy();
eRegistration.injectApi(aEvent)
const iER: IEventRegistration = eRegistration

const uSU: USignUpForEvent = new USignUpForEvent(pSU, iER)


function switchView(state: ScreenId, action: ScreenId) {
    let newState = state;
    switch (action) {
        case ScreenId.EVENT_SIGN_UP_VIEW:
            newState = ScreenId.EVENT_SIGN_UP_VIEW;
            break;
        case ScreenId.EVENT_LIST_VIEW:
            newState = ScreenId.EVENT_LIST_VIEW;
    }
    return newState;
}


export const InnerApp: FC = () => {
    const [state, globalUpdateView] = useReducer(switchView, ScreenId.EVENT_LIST_VIEW);

    pEL.injectGlobalUpdateView(globalUpdateView);
    pSU.injectGlobalUpdateView(globalUpdateView)
    const [usData, usUpdateView] = useReducer(updateUSView, new SignUpState())

    return (
        <div>
            <VEventsListWindow isActive={true} pEL={pEL} uSE={uSE} uSU={uSU} pSU={pSU} usData={usData}
                               usUpdateView={usUpdateView}/>
            <VEventSignUpWindow pSU={pSU} usData={usData} usUpdateView={usUpdateView} uSU={uSU}/>
        </div>
    )
}
