import Draggable from "react-draggable";
import { MenuListItem, ScrollView, StyledButton, Window, WindowContent, WindowHeader } from "react95";

export const VEventPanelWindow = () => {

  return (
    <Draggable>
      <Window>
        <WindowHeader>Panel - Wydarzenie 1</WindowHeader>
        <WindowContent>
          <StyledButton>Zamknij</StyledButton>
          <StyledButton>Usuń gracza</StyledButton>
          <StyledButton>Wyślij podpowiedź</StyledButton>
          <StyledButton>Uruchom</StyledButton>
          <StyledButton>Zakończ</StyledButton>
          <StyledButton>Wstrzymaj</StyledButton>
          <ScrollView style={{ width: "450px", height: "200px" }}>

            <MenuListItem>
              {/*        onClick={() => {*/}
              {/*          selectEvent(data.id);*/}
              {/*        }}*/}
              {/*        key={data.id}*/}
              {/*        style={*/}
              {/*          emData && data.id === emData.selectedEventId*/}
              {/*            ? {*/}
              {/*              background: "#05007e",*/}
              {/*              color: "white"*/}
              {/*            }*/}
              {/*            : {}*/}
              {/*        }*/}
              {/*      >*/}
              {/*        <p style={{ whiteSpace: "nowrap" }}>*/}
              {/*          {data.eventName}; {data.gameName}*/}
              {/*          ; {data.date}; {data.hour}; {data.takenSeats}/{data.allSeats} uczestników*/}
              {/*        </p>*/}
            </MenuListItem>
          </ScrollView>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
