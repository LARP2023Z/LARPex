export type EventPanelDataResponse = {
  id: string;
  eventName: string;
  gameName: string;
  date: string;
  hour: string;
  takenSeats: string;
  allSeats: string;
  players: PlayerData[];
};

export type PlayerData = {
  name: string;
  character: string;
  job: string;
  className: string;
};

export type ManagerReturnedType = {
  status: string;
  eventId: string;
  name: string;
  hostId: string;
  startDate: string;
  endDate: string;
  games: {
    id: string;
  }[];
  numberOfParticipants: 0;
  price: number;
};
