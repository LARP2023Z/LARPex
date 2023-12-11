import { MenuListItem, ScrollView, StyledButton, Window, WindowContent, WindowHeader } from "react95";
import Draggable from "react-draggable";
import { FC, useEffect, useMemo, useReducer } from "react";
import { CEventMenuWindow, updateEMView } from "./CEventMenuWindow";
import { UEventMenuWindow } from "./UEventMenuWindow";
import { MenuState } from "../../types/MenuState";
import { EventPanelDataResponse } from "../../types/EventPanelDataResponse";
import { PEventMenuWindow } from "./PEventMenuWindow";
import { useNavigate } from "react-router-dom";

export const VEventMenuWindow: FC<{
  uEventMenu: UEventMenuWindow
  pEventMenu: PEventMenuWindow
}>
  = ({ uEventMenu, pEventMenu }) => {

  const nav = useNavigate();
  const [emData, emUpdateView] = useReducer(updateEMView, new MenuState());

  const { onClickEvent, onBack, onLoadPage, selectEvent } = useMemo(() =>
    CEventMenuWindow(uEventMenu), []);


  pEventMenu.injectDataHandles(emData, emUpdateView, null);


  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);


  return (<Draggable>
    <Window>
      <WindowHeader>Menu zarządzania wydarzeniami</WindowHeader>
      <WindowContent>
        <ScrollView style={{ width: "450px", height: "200px" }}>
          {emData &&
            emData.eventsList &&
            emData.eventsList.map((data: EventPanelDataResponse) => {
              return (
                <MenuListItem
                  onClick={() => {
                    selectEvent(data.id);
                  }}
                  key={data.id}
                  style={
                    emData && data.id === emData.selectedEventId
                      ? {
                        background: "#05007e",
                        color: "white"
                      }
                      : {}
                  }
                >
                  <p style={{ whiteSpace: "nowrap" }}>
                    {data.eventName}; {data.gameName}
                    ; {data.date}; {data.hour}; {data.takenSeats}/{data.allSeats} uczestników
                  </p>
                </MenuListItem>
              );
            })}
        </ScrollView>
        <StyledButton
          onClick={() => {
            const id: string = emData.selectedEventId;
            onClickEvent(id);
          }}
          active={emData.selectedEventId.length === 0}>Wyświetl panel</StyledButton>
        <StyledButton
          onClick={() => {
            onBack();
            nav("/");
          }}
        >Wróć</StyledButton>
      </WindowContent>
    </Window>
  </Draggable>);
};
