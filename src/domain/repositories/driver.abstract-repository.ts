import type { Either } from "@sweet-monads/either";
import type { Failure } from "~/core/error/failure";
import type { DriverEntity } from "~/domain/entities/driver.entity";

export abstract class DriverRepository {
  public abstract getDrivers(): Promise<Either<Failure, DriverEntity>>;
}
