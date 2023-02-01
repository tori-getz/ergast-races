import 'reflect-metadata';

import { Container } from 'inversify';
import { DriverDataSource, DriverDataSourceImpl } from '~/data/datasources/driver.datasource';
import { DriverRepositoryImpl } from '~/data/repositories/driver.repository';
import { DriverRepository } from '~/domain/repositories/driver.abstract-repository';

import { GetDrivers } from '~/domain/usecases/get-drivers.use-case';
import { DRIVER_DATA_SOURCE, DRIVER_REPOSITORY, GET_DRIVERS } from './types';

const container = new Container();

// use cases
container.bind<GetDrivers>(GET_DRIVERS).to(GetDrivers);

// repositories
container.bind<DriverRepository>(DRIVER_REPOSITORY).to(DriverRepositoryImpl);

// data sources
container.bind<DriverDataSource>(DRIVER_DATA_SOURCE).to(DriverDataSourceImpl);

export { container };
