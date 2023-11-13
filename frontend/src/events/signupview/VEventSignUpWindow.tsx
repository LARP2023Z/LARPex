import {Dispatch, FC} from "react";
import {Button, Window, WindowContent, WindowHeader} from "react95";
import Draggable from "react-draggable";
import {PSignUpWindow} from "./PSignUpWindow";
import {USignUpForEvent} from "../usecases/USignUpForEvent";
import {SignUpState} from "../types/SignUpState";
import {CSignUpWindow} from "./CEventSignUpWindow";

export const VEventSignUpWindow: FC<{
    pSU: PSignUpWindow;
    uSU: USignUpForEvent;
    usData: SignUpState;
    usUpdateView: Dispatch<any>;
}> = ({pSU, uSU, usData, usUpdateView}) => {

    pSU.injectDataHandles(usData, usUpdateView);

    const [onSignUpEvent, closeWindow] = CSignUpWindow(uSU);

    return (
        <div>
            {
                usData.isWindowActive &&
                <Draggable>
                    <Window>
                        <WindowHeader>
                            {
                                usData.status
                            }
                        </WindowHeader>
                        <WindowContent>
                            <p>
                                Operacja zakończyła się ze statusem: {usData.status}
                            </p>
                            <Button onClick={() => {
                                closeWindow({userId: "string",
                                    eventId: "string"})
                            }}>Zamknij</Button>
                        </WindowContent>
                    </Window>
                </Draggable>
            }
        </div>
    )
}
