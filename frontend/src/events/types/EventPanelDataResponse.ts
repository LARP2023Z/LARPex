export type EventPanelDataResponse = {
  id: string
  eventName: string
  gameName: string
  date: string
  hour: string
  takenSeats: string
  allSeats: string
  players: PlayerData[]
}

export type PlayerData = {
  name: string
  character: string
  job: string
  className: string
}
