import { Either, left, right } from "@sweet-monads/either";
import { inject, injectable } from "inversify";
import { DRIVER_DATA_SOURCE } from "~/core/di/types";
import { Failure, ServerFailure } from "~/core/error/failure";
import { DriverEntity } from "~/domain/entities/driver.entity";
import { DriverRepository } from "~/domain/repositories/driver.abstract-repository";
import { DriverDataSource } from "~/data/datasources/driver.datasource";

@injectable()
export class DriverRepositoryImpl extends DriverRepository {
  @inject(DRIVER_DATA_SOURCE)
  private readonly driverDataSource!: DriverDataSource;

  public async getDrivers(limit: number, offset: number): Promise<Either<Failure, DriverEntity[]>> {
    try {
      const drivers = await this.driverDataSource.getDrivers(limit, offset);

      return right(drivers);
    } catch (e: any) {
      return left(new ServerFailure(e.message ?? ''));
    }
  }
}
