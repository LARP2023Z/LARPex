import { ActionId } from '../../types/ActionId';
import { MenuState } from '../../types/MenuState';
import { UEventMenuWindow } from './UEventMenuWindow';

export const updateEMView = (state: MenuState, _action: ActionId) => {
  return { ...state };
};

export const CEventMenuWindow = (uEventMenu: UEventMenuWindow) => {
  function onLoadPage() {
    uEventMenu.loadPageData();
  }

  function onClickEvent(e: string) {
    uEventMenu.showEventPanel(e);
  }

  function onBack() {
    uEventMenu.goBack();
  }

  function selectEvent(id: string) {
    uEventMenu.selectEvent(id);
  }

  return { onLoadPage, onClickEvent, onBack, selectEvent };
};
