import {ActionId} from "../types/ActionId";
import {USignUpForEvent} from "../usecases/USignUpForEvent";
import {SignUpState} from "../types/SignUpState";
import {EventSignUpDto} from "../types/EventSignUpDto";

export const updateUSView = (state: SignUpState, action: ActionId): SignUpState => {
    return {...state};
}

export const CSignUpWindow = (show: USignUpForEvent) => {
    function onSignUpEvent(data: EventSignUpDto) {
        show.signUp(data)
    }

    function closeWindow() {
        show.closeWindow()
    }

    return [onSignUpEvent, closeWindow];
}
