import { MenuState } from "../../types/MenuState";
import { ActionId } from "../../types/ActionId";
import { UEventPanelWindow } from "./UEventPanelWindow";

export const updateEPView = (
  state: MenuState,
  _action: ActionId
) => {
  return { ...state };
};

export const CEventPanelWindow = (uEventPanel: UEventPanelWindow) => {
  function onBack() {
    uEventPanel.goBack();
  }

  return { onBack };
};
