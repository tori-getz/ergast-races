import { DataTable, DataTablePaginationProps } from "react-native-paper"
import type { DriverEntity } from "~/domain/entities/driver.entity"

interface DriversTableProps extends DataTablePaginationProps {
  drivers: DriverEntity[]
  onSelectDriver: (driver: DriverEntity) => any;
}

export const DriversTable: React.FC<DriversTableProps> = ({
  drivers,
  onSelectDriver,
  ...paginationProps
}) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Driver Name</DataTable.Title>
        <DataTable.Title>Permanent Number</DataTable.Title>
        <DataTable.Title>Nationality</DataTable.Title>
        <DataTable.Title>DOB</DataTable.Title>
      </DataTable.Header>

      {drivers.map((driver) => (
        <DataTable.Row key={driver.driverId}>
          <DataTable.Cell onPress={() => onSelectDriver(driver)}>{driver.familyName} {driver.givenName}</DataTable.Cell>
          <DataTable.Cell>{driver.permanentNumber}</DataTable.Cell>
          <DataTable.Cell>{driver.nationality}</DataTable.Cell>
          <DataTable.Cell>{driver.dateOfBirth}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination {...paginationProps} />
    </DataTable>
  )
}
