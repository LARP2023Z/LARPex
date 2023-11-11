import dayjs from 'dayjs';
import { IEvents } from './IEvents';

export class EventProxyMock implements IEvents {
  getEventDetails(eventId: string) {
    // Mock
    return Promise.resolve({
      uuid: crypto.randomUUID(),
      name: 'name',
      host: 'host',
      startDate: dayjs(),
      stopDate: dayjs().add(3, 'day'),
    });
  }
}
