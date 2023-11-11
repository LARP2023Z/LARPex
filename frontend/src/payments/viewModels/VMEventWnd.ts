import { Dayjs } from 'dayjs';

export class EventDetails {
  uuid = '';
  name = '';
  host = '';
  startDate?: Dayjs;
  stopDate?: Dayjs;
}
