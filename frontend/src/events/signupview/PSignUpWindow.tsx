import {SignUpState} from "../types/SignUpState";
import {Dispatch} from "react";
import {ActionId} from "../types/ActionId";
import {RegistrationResponse} from "../types/RegistrationResponse";
import {ScreenId} from "../types/ScreenId";
import {PresentationDispatcher} from "../PresentationDispatcher";

export class PSignUpWindow extends PresentationDispatcher {
    mState !: SignUpState;
    uView!: Dispatch<ActionId>;

    injectDataHandles(s: SignUpState, uv: Dispatch<ActionId>) {
        this.mState = s;
        this.uView = uv;
    }

    handleSignUpEvent(response: RegistrationResponse) {
        this.mState.status = response.status
        this.mState.isWindowActive = true
        this.uView?.(ActionId.SIGN_UP);
        this.gUpdateView?.(ScreenId.EVENT_SIGN_UP_VIEW);
    }

    handleCloseWindow() {
        this.mState.isWindowActive = false
        this.uView?.(ActionId.CLOSE_WINDOW);
        this.gUpdateView?.(ScreenId.EVENT_SIGN_UP_VIEW);
    }

}
