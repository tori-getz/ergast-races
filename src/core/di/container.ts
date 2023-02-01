import 'reflect-metadata';

import { Container } from 'inversify';
import { DriverDataSource, DriverDataSourceImpl } from '~/data/datasources/driver.datasource';
import { DriverRepositoryImpl } from '~/data/repositories/driver.repository';
import { DriverRepository } from '~/domain/repositories/driver.abstract-repository';

import { GetDrivers } from '~/domain/usecases/get-drivers.use-case';
import { DRIVER_DATA_SOURCE, DRIVER_REPOSITORY, GET_DRIVERS, GET_RACES, RACE_DATA_SOURCE, RACE_REPOSITORY } from './types';
import { RaceDataSource, RaceDataSourceImpl } from '~/data/datasources/race.datasource';
import { RaceRepository } from '~/domain/repositories/race.abstract-repository';
import { RaceRepositoryImpl } from '~/data/repositories/race.repository';
import { GetRaces } from '~/domain/usecases/get-races.use-case';

const container = new Container();

// use cases
container.bind<GetDrivers>(GET_DRIVERS).to(GetDrivers);
container.bind<GetRaces>(GET_RACES).to(GetRaces);

// repositories
container.bind<DriverRepository>(DRIVER_REPOSITORY).to(DriverRepositoryImpl);
container.bind<RaceRepository>(RACE_REPOSITORY).to(RaceRepositoryImpl);

// data sources
container.bind<DriverDataSource>(DRIVER_DATA_SOURCE).to(DriverDataSourceImpl);
container.bind<RaceDataSource>(RACE_DATA_SOURCE).to(RaceDataSourceImpl);

export { container };
