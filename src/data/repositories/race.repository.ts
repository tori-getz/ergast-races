import { Either, left, right } from "@sweet-monads/either";
import { inject, injectable } from "inversify";
import { RACE_DATA_SOURCE } from "~/core/di/types";
import { Failure, ServerFailure } from "~/core/error/failure";
import { RaceEntity } from "~/domain/entities/race.entity";
import { RaceRepository } from "~/domain/repositories/race.abstract-repository";
import { RaceDataSource } from "../datasources/race.datasource";

@injectable()
export class RaceRepositoryImpl extends RaceRepository {
  @inject(RACE_DATA_SOURCE)
  private readonly raceDataSource!: RaceDataSource;

  public async getRaces(limit: number, offset: number): Promise<Either<Failure, { races: RaceEntity[]; total: number; }>> {
    try {
      const races = await this.raceDataSource.getRaces(limit, offset);

      return right(races)
    } catch(e: any) {
      return left(new ServerFailure(e.message ?? 'Error'));
    }
  }
}
