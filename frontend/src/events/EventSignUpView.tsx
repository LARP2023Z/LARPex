import {FC} from "react";
import {Window, WindowContent, WindowHeader} from "react95";
import Draggable from "react-draggable";

interface EventSignUpViewProps {
    status: EventType
}

export enum EventType {
    ERROR = 'ERROR',
    NOT_AVALIABLE_PLACE = 'NOT_AVALIABLE_PLACE',
    SUCCESS = 'SUCCESS',
}

export const EventSignUpView: FC<EventSignUpViewProps> = ({status}) => {


    const getTitle = () => {
        switch (status) {
            case EventType.ERROR:
                return "Niepowodzenie"
            case EventType.NOT_AVALIABLE_PLACE:
                return "Brak miejsc"
            case EventType.SUCCESS:
                return "Powodzenie"
        }
    }

    const getBody = () => {
        switch (status) {
            case EventType.ERROR:
                return "Z powodzeniem zapisano na wydarzenie."
            case EventType.NOT_AVALIABLE_PLACE:
                return "Niestety na wybrane wydarzenie nie ma już wolnych miejsc."
            case EventType.SUCCESS:
                return "W wyniku niepowodzenia płatności nie zapisano na wydarzenie."
        }
    }

    return (
        <Draggable>
            <Window>
                <WindowHeader>
                    {
                        getTitle()
                    }
                </WindowHeader>
                <WindowContent>
                    <p>
                        {getBody()}
                    </p>
                </WindowContent>
            </Window>
        </Draggable>
    )
}
