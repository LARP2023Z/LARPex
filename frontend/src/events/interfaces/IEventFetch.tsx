import { EventsListDto } from '../types/EventsListDto';
import { EventListResponse } from '../types/EventListResponse';

export interface IEventFetch {
  listsEvents(): Promise<
    {
      name: string;
      host: string;
      uuid: string;
      startDate: string;
      stopDate: string;
    }[]
  >;
}

export class EventsProxy implements IEventFetch {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async listsEvents(): Promise<EventsListDto[]> {
    try {
      const response = await fetch('/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const responseData: EventListResponse[] = await response.json();

      return responseData.map((res) => {
        return {
          uuid: res.eventId,
          name: res.name,
          host: res.hostname,
          startDate: res.startDate,
          stopDate: res.endDate,
        };
      });
    } catch (error) {
      throw new Error(`Error fetching events: ${error}`);
    }
  }
}
