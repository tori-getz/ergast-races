import type { Either } from "@sweet-monads/either";
import { injectable } from "inversify";
import type { Failure } from "~/core/error/failure";
import type { RaceEntity } from "../entities/race.entity";

@injectable()
export abstract class RaceRepository {
  public abstract getRaces(limit: number, offset: number): Promise<Either<Failure, { races: RaceEntity[], total: number }>>;
}
