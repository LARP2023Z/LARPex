import { PresentationDispatcher } from '../PresentationDispatcher';
import { EventsListDto } from '../types/EventsListDto';
import { Dispatch } from 'react';
import { ActionId } from '../types/ActionId';
import { ScreenId } from '../types/ScreenId';
import { EventListState } from '../types/EventListState';

export class PEventsListWindow extends PresentationDispatcher {
  mState!: EventListState;
  uView!: Dispatch<ActionId>;

  injectDataHandles(s: EventListState, uv: Dispatch<ActionId>) {
    this.mState = s;
    this.uView = uv;
  }

  handleShowPaginatedEvents(s: Array<EventsListDto>) {
    this.mState.eventsList.splice(0, this.mState.eventsList.length);
    this.mState.eventsList.push(...s);
    this.mState.selectedEventId = '';
    this.uView?.(ActionId.FETCH);
    this.gUpdateView?.(ScreenId.EVENT_LIST_VIEW);
  }

  handleChangeEvent(eventId: string) {
    this.mState.selectedEventId = eventId;
    this.uView?.(ActionId.UPDATE_SELECTED_EVENT);
    this.gUpdateView?.(ScreenId.EVENT_LIST_VIEW);
  }
}
