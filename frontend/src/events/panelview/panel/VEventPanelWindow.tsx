import Draggable from "react-draggable";
import { MenuListItem, ScrollView, StyledButton, Window, WindowContent, WindowHeader } from "react95";
import { FC, useMemo, useReducer } from "react";
import { EventPanelDataResponse } from "../../types/EventPanelDataResponse";
import { UEventPanelWindow } from "./UEventPanelWindow";
import { PEventPanelWindow } from "./PEventPanelWindow";
import { CEventMenuWindow } from "../menu/CEventMenuWindow";
import { MenuState } from "../../types/MenuState";
import { CEventPanelWindow, updateEPView } from "./CEventPanelWindow";

export const VEventPanelWindow: FC<{
  init_Data?: EventPanelDataResponse | undefined
  uPanelWindow: UEventPanelWindow
  pPanelWindow: PEventPanelWindow
}> = ({ init_Data, uPanelWindow, pPanelWindow }) => {
  const [epData, epUpdateView] = useReducer(updateEPView, new MenuState());

  const { onBack } = useMemo(() =>
    CEventPanelWindow(uPanelWindow), [uPanelWindow]);

  return (
    <Draggable>
      <Window>
        <WindowHeader>Panel - {init_Data ? init_Data.eventName : "Wydarzenie 1"}</WindowHeader>
        <WindowContent>
          <StyledButton onClick={onBack}>Zamknij</StyledButton>
          <StyledButton>Usuń gracza</StyledButton>
          <StyledButton>Wyślij podpowiedź</StyledButton>
          <StyledButton>Uruchom</StyledButton>
          <StyledButton>Zakończ</StyledButton>
          <StyledButton>Wstrzymaj</StyledButton>
          <ScrollView style={{ width: "450px", height: "200px" }}>
            {init_Data && init_Data.players &&
              init_Data.players.map(player =>
                <MenuListItem>
                  <p style={{ whiteSpace: "nowrap" }}>
                    {player.name}; {player.character}; {player.job}; {player.className}
                  </p>
                </MenuListItem>
              )
            }
          </ScrollView>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
