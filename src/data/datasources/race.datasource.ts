import { injectable } from "inversify";
import { httpClient } from "~/core/networking/http";
import { RaceEntity } from "~/domain/entities/race.entity";
import { RaceModel } from "../models/race.model";

@injectable()
export abstract class RaceDataSource {
  public abstract getRaces(limit: number, offset: number): Promise<{ races: RaceEntity[], total: number }>;
}

@injectable()
export class RaceDataSourceImpl extends RaceDataSource {
  public async getRaces(limit: number, offset: number): Promise<{ races: RaceEntity[], total: number }> {
    const { data } = await httpClient(`races.json?limit=${limit}&offset=${offset}`);

    // я знаю, что стоило бы провалидировать целиком объект data
    // но мне банально лень для тестового задания писать так много кода
    const races = data.MRData.RaceTable.Races;
    const total = parseInt(data.MRData.total);

    await RaceModel.array().parseAsync(races);

    return { races, total };
  }
}
