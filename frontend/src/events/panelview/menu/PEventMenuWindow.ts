import { PresentationDispatcher } from "../../PresentationDispatcher";
import { MenuState } from "../../types/MenuState";
import { Dispatch } from "react";
import { ActionId } from "../../types/ActionId";
import { ScreenId } from "../../types/ScreenId";
import { EventPanelDataResponse } from "../../types/EventPanelDataResponse";

export class PEventMenuWindow extends PresentationDispatcher {
  mState!: MenuState;
  pState?: EventPanelDataResponse | undefined;
  uView!: Dispatch<ActionId>;

  injectDataHandles(s: MenuState, uv: Dispatch<ActionId>, pState: any) {
    this.mState = s;
    this.uView = uv;
    this.pState = pState;
  }

  handleGoBackEvent() {
    this.gUpdateView?.(ScreenId.MAIN);
  }

  handleSelectEvent(id: string) {
    this.mState.selectedEventId = id;
    this.uView?.(ActionId.FETCH);
    this.gUpdateView?.(ScreenId.EVENT_MENU_VIEW);
  }

  handleShowEventPanel(id: string) {
    const events = this.mState.eventsList;
    const i = this.mState.eventsList.findIndex(e => e.id === id);
    if (Object.prototype.hasOwnProperty.call(events, i)) {
      this.pState = events[i];
      this.uView?.(ActionId.FETCH);
      this.gUpdateView(ScreenId.EVENT_PANEL_VIEW);
    } else {
      alert("ELEMENT NOT FOUND");
    }
  }

  handleShowMenuEvents(e: EventPanelDataResponse[]) {

    this.mState.eventsList.splice(0, this.mState.eventsList.length);
    this.mState.eventsList.push(...e);
    this.mState.selectedEventId = "";
    this.uView?.(ActionId.FETCH);
    this.gUpdateView?.(ScreenId.EVENT_MENU_VIEW);
  }
}
