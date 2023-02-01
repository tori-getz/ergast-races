import React, { useState } from "react"
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { Loading } from "../components/loading.component";
import { RacesTable } from "../components/races-table.component";
import { useRaces } from "../hooks/use-races.hook";

const ITEMS_PER_PAGE = 10;

export const RacesPage: React.FC = () => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ page, setPage ] = useState<number>(0);

  const {
    races,
    total,
    loadRaces
  } = useRaces();

  useEffect(() => {
    setLoading(true);

    const limit = ITEMS_PER_PAGE;
    const offset = page * limit;

    loadRaces(limit, offset).then(() => {
      setLoading(false)
    });
  }, [page])

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <ScrollView>
      <RacesTable
        races={races}
        page={page}
        numberOfItemsPerPage={ITEMS_PER_PAGE}
        numberOfPages={total / ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
    </ScrollView>
  )
}
