import { EventDetails } from '../viewModels/VMEventWnd';

export interface IEvents {
  getEventDetails(eventId: string): Promise<EventDetails>;
}
