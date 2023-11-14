import { UShowEventList } from '../usecases/UShowEventList';
import { ActionId } from '../types/ActionId';
import { EventListState } from '../types/EventListState';

export const updateELView = (
  state: EventListState,
  _action: ActionId
): EventListState => {
  return { ...state };
};

export const CEventsListWindow = (show: UShowEventList) => {
  function onLoadPageEvent() {
    show.fetchEvents();
  }

  function onClickEvent(eventId: string) {
    show.onSelectEvent(eventId);
  }

  return [onLoadPageEvent, onClickEvent];
};
