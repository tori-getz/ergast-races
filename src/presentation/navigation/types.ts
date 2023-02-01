import type { DriverEntity } from "~/domain/entities/driver.entity"

export type RootStackParamList = {
  DriversPage: undefined
  DriverPage: { driver: DriverEntity }
}
