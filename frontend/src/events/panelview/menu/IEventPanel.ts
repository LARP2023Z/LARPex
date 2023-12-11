import { EventPanelDataResponse } from "../../types/EventPanelDataResponse";

export interface IEventPanel {
  getEventData(): EventPanelDataResponse[];
}


export class MockedAPI implements IEventPanel {
  getEventData(): EventPanelDataResponse[] {
    return [
      {
        id: "1",
        eventName: "Wydarzenie 1",
        gameName: "Gra 1",
        date: "14/04/2023",
        hour: "12:00-14:00",
        takenSeats: "5",
        allSeats: "5",
        players: [
          {
            name: "Gracz 1",
            character: "postać 1",
            job: "profesja 1",
            className: "klasa 1"
          }
        ]
      }, {
        id: "2",
        eventName: "Wydarzenie 2",
        gameName: "Gra 2",
        date: "02/04/2005",
        hour: "21:00-22:00",
        takenSeats: "10",
        allSeats: "20",
        players: [
          {
            name: "Gracz 1",
            character: "postać 1",
            job: "profesja 1",
            className: "klasa 1"
          }
        ]
      }, {
        id: "3",
        eventName: "Wydarzenie 3",
        gameName: "Gra 3",
        date: "11/09/2001",
        hour: "8:46-10:28",
        takenSeats: "21",
        allSeats: "37",
        players: [
          {
            name: "Gracz 1",
            character: "postać 1",
            job: "profesja 1",
            className: "klasa 1"
          }
        ]
      }
    ];
  }

}
