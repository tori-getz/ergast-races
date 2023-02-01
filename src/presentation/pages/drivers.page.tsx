import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { DriversTable } from '~/presentation/components/drivers-table.component';

import { Loading } from '~/presentation/components/loading.component';
import { useDrivers } from '~/presentation/hooks/use-drivers.hook';

const ITEMS_PER_PAGE = 10;

export const DriversPage: React.FC = () => {
  const [ loading, setLoading ] = useState<boolean>(true);

  const [ page, setPage ] = useState<number>(0);

  const [ offset, setOffset ] = useState<number>(0);

  const {
    drivers,
    total,
    loadDrivers
  } = useDrivers();

  useEffect(() => {
    setLoading(true);
    
    const limit = ITEMS_PER_PAGE;
    const offset = page * ITEMS_PER_PAGE;

    loadDrivers(limit, offset).then(() => {
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <ScrollView>
      <DriversTable
        drivers={drivers} 
        page={page}
        numberOfItemsPerPage={ITEMS_PER_PAGE}
        numberOfPages={total / ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
    </ScrollView>
  )
}
