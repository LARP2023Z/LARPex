import { EventPanelDataResponse, ManagerReturnedType } from "../../types/EventPanelDataResponse";
import { EventsProxy, IEventFetch } from "../../interfaces/IEventFetch";

export interface IEventPanel {
  getEventData(): Promise<EventPanelDataResponse[]>;
}

export class NormalAPI implements IEventPanel {
  iEventPanel: IEventFetch = new EventsProxy("localhost:8080");

  async getEventData(): Promise<EventPanelDataResponse[]> {
    const events = await this.iEventPanel.listsEvents();
    const responseList: EventPanelDataResponse[] = [];

    const eventPromises = events.map(async (res) => {
      try {
        const manageDataPromise = fetch("/api/events/manager", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            eventId: res.uuid
          })
        }).then((res) => res.json()).catch(() => []) as Promise<ManagerReturnedType>;

        const manageData: ManagerReturnedType = await manageDataPromise;

        const dateSplit = res.startDate.split("T");
        const eventData: EventPanelDataResponse = {
          id: res.uuid,
          eventName: res.name,
          gameName: "",
          date: dateSplit[0],
          hour: dateSplit[1],
          takenSeats: "",
          allSeats: "",
          players: mockedPlayers
        };

        responseList.push(eventData);
      } catch (error) {
        console.log(error);
      }
    });

    await Promise.all(eventPromises);

    console.log("DUPA");
    console.log(responseList);
    return responseList;
  }


}


const mockedPlayers = [
  {
    name: "Gracz 1",
    character: "postać 1",
    job: "profesja 1",
    className: "klasa 1"
  }
];
