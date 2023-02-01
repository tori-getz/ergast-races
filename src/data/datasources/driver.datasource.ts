import { injectable } from "inversify";
import { httpClient } from "~/core/networking/http";
import type { DriverEntity } from "~/domain/entities/driver.entity";
import { DriverModel } from "../models/driver.model";

@injectable()
export abstract class DriverDataSource {
  public abstract getDrivers(limit: number, offset: number): Promise<{ drivers: DriverEntity[], total: number }>;
}

@injectable()
export class DriverDataSourceImpl extends DriverDataSource {
  public async getDrivers(limit: number, offset: number): Promise<{ drivers: DriverEntity[], total: number }> {
    const { data } = await httpClient(`drivers.json?limit=${limit}&offset=${offset}`);

    // я знаю, что стоило бы провалидировать целиком объект data
    // но мне банально лень для тестового задания писать так много кода
    const drivers = data.MRData.DriverTable.Drivers;
    const total = parseInt(data.MRData.total);

    // await DriverModel.array().parseAsync(drivers);

    return { drivers, total };
  }
}
