import type { Either } from "@sweet-monads/either";
import { injectable } from "inversify";
import type { Failure } from "~/core/error/failure";
import type { DriverEntity } from "~/domain/entities/driver.entity";

@injectable()
export abstract class DriverRepository {
  public abstract getDrivers(limit: number, offset: number): Promise<Either<Failure, { drivers: DriverEntity[], total: number }>>;
}
