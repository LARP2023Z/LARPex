import {FC, useState} from "react";
import {Button, MenuListItem, ScrollView, TextInput, Window, WindowContent, WindowHeader} from "react95";
import Draggable from "react-draggable";
import {useNavigate} from "react-router-dom";
import {EventSignUpView, EventType} from "./EventSignUpView";

export const EventsListView: FC = () => {
    const navigate = useNavigate();

    const [state, setState] = useState<EventType | null>(null)

    const randomResponse = () => {
        return () => {
            switch (Math.floor(Math.random() * 3)) {
                case 1:
                    return EventType.ERROR
                case 0:
                    return EventType.SUCCESS
                default:
                    return EventType.NOT_AVALIABLE_PLACE
            }
        }
    }

    return (
        <>
            <Draggable>
                <Window>
                    <WindowHeader>Lista wydarzeń</WindowHeader>
                    <WindowContent>
                        <div style={{
                            display: "flex",
                            gap: 8,
                            alignItems: "center"
                        }}>
                            <Button onClick={() => {
                                console.log("DIDSADS")
                                navigate("/");
                            }} variant='raised'>Wróć</Button>
                            <h4>od</h4>
                            <TextInput
                                value="16/10/2137"
                                placeholder='__/__/____'
                                disabled
                                fullWidth={false}
                            />
                            <h4>do</h4>
                            <TextInput
                                value="16/10/2137"
                                placeholder='__/__/____'
                                disabled
                                fullWidth={false}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: 8,
                            }}
                        >
                            <ScrollView style={{width: '450px', height: '200px'}}>
                                <MenuListItem>
                                    <p style={{whiteSpace: "nowrap"}}>Wydarzenie 1; Gra 1; 14/04/2023; 12:00-14:00; 0/20
                                        uczestników</p>
                                </MenuListItem>
                                <MenuListItem>
                                    <p style={{whiteSpace: "nowrap"}}>Wydarzenie 2; Gra 1; 14/04/2023; 12:00-14:00; 0/20
                                        uczestników</p>
                                </MenuListItem>
                                <MenuListItem>
                                    <p style={{whiteSpace: "nowrap"}}>Wydarzenie 3; Gra 1; 14/04/2023; 12:00-14:00; 0/20
                                        uczestników</p>
                                </MenuListItem>

                            </ScrollView>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Button>
                                    Opis
                                </Button>
                                <br/>
                                <Button onClick={() => {
                                    setState(randomResponse())
                                }}>
                                    Zapisz się
                                </Button>
                            </div>
                        </div>
                    </WindowContent>
                </Window>
            </Draggable>
            {state != null && <EventSignUpView status={state}/>}
        </>
    )
}
