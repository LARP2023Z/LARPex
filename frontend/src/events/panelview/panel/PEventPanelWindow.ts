import { PresentationDispatcher } from '../../PresentationDispatcher';
import { ScreenId } from '../../types/ScreenId';

export class PEventPanelWindow extends PresentationDispatcher {
  handleGoBack() {
    this.gUpdateView?.(ScreenId.EVENT_MENU_VIEW);
  }
}
