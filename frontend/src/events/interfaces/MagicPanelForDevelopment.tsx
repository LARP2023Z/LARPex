import Draggable from "react-draggable";
import {
  StyledButton,
  Window,
  WindowContent,
  WindowHeader
} from "react95";
import { FC } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export const MagicPanelForDevelopment: FC = () => {

  let { gameName } = useParams();

  const navigate = useNavigate();
  return <Draggable>
    <Window>
      <WindowHeader>Panel gracza</WindowHeader>
      <WindowContent>
        <p>Nazwa gry: {gameName}</p>
        <p>Nazwa postaci: Krasnolud</p>
        <StyledButton>Wyświetl mape lokacji</StyledButton>
        <StyledButton>Oceń gre</StyledButton>
        <StyledButton>Sprawdź aktualny stan gry</StyledButton>
        <StyledButton onClick={() => navigate("/")}>Wróć</StyledButton>
      </WindowContent>
    </Window>
  </Draggable>;
};
