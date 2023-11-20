import {EventsListDto} from "../types/EventsListDto";
import {AEvents} from "./AEvents";

export interface IEventFetch {
    listsEvents(): Promise<Array<EventsListDto>>
}

export class EventsProxy implements IEventFetch {

    aEvents: AEvents

    injectApi(aEvents) {
        this.aEvents = aEvents
    }

    async listsEvents(): Promise<Array<EventsListDto>> {
        this.aEvents.fetchEvents().then(
            result => {
                return result.map(res => {
                    return {
                        uuid: res.eventId,
                        name: res.name,
                        host: res.hostname,
                        startDate: res.startDate,
                        stopDate: res.endDate
                    }
                })
            }
        ).catch(reason => {
            throw reason
        })
    }
}
