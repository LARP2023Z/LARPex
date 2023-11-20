import {EventsListDto} from "../types/EventsListDto";

export interface IEventFetch {
    listsEvents(): Array<EventsListDto>
}


export class EventsProxy implements IEventFetch {
    listsEvents(): Array<EventsListDto> {
        return [
            {
                uuid: "string1",
                name: "string1",
                host: "string1",
                startDate: new Date(),
                stopDate: new Date()
            },
            {
                uuid: "string2",
                name: "string2",
                host: "string2",
                startDate: new Date(),
                stopDate: new Date()
            },
            {
                uuid: "string3",
                name: "string3",
                host: "string3",
                startDate: new Date(),
                stopDate: new Date()
            },
        ]
    }

}
