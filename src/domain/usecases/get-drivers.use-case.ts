import { Either } from "@sweet-monads/either"
import { inject, injectable } from "inversify"
import { DRIVER_REPOSITORY } from "~/core/di/types"
import { Failure } from "~/core/error/failure"
import type { UseCase } from "~/core/use-case"
import { DriverEntity } from "../entities/driver.entity"
import { DriverRepository } from "../repositories/driver.abstract-repository"

export interface GetDriversParams {
  limit: number
  offset: number
}

@injectable()
export class GetDrivers implements UseCase<{ drivers: DriverEntity[], total: number }, GetDriversParams> {
  @inject(DRIVER_REPOSITORY)
  private readonly driverRepository!: DriverRepository;

  public run(params: GetDriversParams): Promise<Either<Failure, { drivers: DriverEntity[], total: number }>> {
    return this.driverRepository.getDrivers(params.limit, params.offset);
  }
}
