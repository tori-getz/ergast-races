import { Either } from "@sweet-monads/either"
import { inject, injectable } from "inversify"
import { RACE_REPOSITORY } from "~/core/di/types"
import { Failure } from "~/core/error/failure"
import { UseCase } from "~/core/use-case"
import { RaceEntity } from "../entities/race.entity"
import { RaceRepository } from "../repositories/race.abstract-repository"

export interface GetRacesParams {
  limit: number
  offset: number
}

@injectable()
export class GetRaces implements UseCase<{ races: RaceEntity[], total: number }, GetRacesParams> {
  @inject(RACE_REPOSITORY)
  private readonly raceRepository!: RaceRepository;

  public run(params: GetRacesParams): Promise<Either<Failure, { races: RaceEntity[]; total: number }>> {
    return this.raceRepository.getRaces(params.limit, params.offset);
  }
}
