import React from "react";

import { DataTable, DataTablePaginationProps } from "react-native-paper";
import { RaceEntity } from "~/domain/entities/race.entity";

interface RacesTableProps extends DataTablePaginationProps {
  races: RaceEntity[]
}

export const RacesTable: React.FC<RacesTableProps> = ({
  races,
  ...paginationProps
}) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Season</DataTable.Title>
        <DataTable.Title>Round</DataTable.Title>
        <DataTable.Title>Race Name</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Circuit</DataTable.Title>
      </DataTable.Header>

      {/* в JSON не приходил ключ, не бейте =( */}
      {races.map((race, key) => (
        <DataTable.Row key={key}>
          <DataTable.Cell>{race.season}</DataTable.Cell>
          <DataTable.Cell>{race.round}</DataTable.Cell>
          <DataTable.Cell>{race.raceName}</DataTable.Cell>
          <DataTable.Cell>{race.date}</DataTable.Cell>
          <DataTable.Cell>{race.Circuit.circuitName}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination {...paginationProps} />
    </DataTable>
  )
}
