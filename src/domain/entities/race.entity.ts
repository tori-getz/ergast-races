export interface RaceEntity {
  raceName: string
  round: string
  season: string
  date: string
  url: string
  // тут по хорошему вынести это в отдельные сущности
  // но приложение маленькое, поэтому так
  Circuit: {
    Location: {
      country: string
      lat: string
      long: string
      locality: string
    },
    circuitId: string
    circuitName: string
    url: string
  }
}
