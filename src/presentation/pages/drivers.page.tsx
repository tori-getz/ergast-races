import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { DriversTable } from '~/presentation/components/drivers-table.component';

import { Loading } from '~/presentation/components/loading.component';
import { useDrivers } from '~/presentation/hooks/use-drivers.hook';
import { RootStackParamList } from '../navigation/types';

const ITEMS_PER_PAGE = 10;

type DriversPageProps = StackScreenProps<RootStackParamList, 'DriversPage'>;

export const DriversPage: React.FC<DriversPageProps> = ({
  navigation
}) => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ page, setPage ] = useState<number>(0);

  const {
    drivers,
    total,
    loadDrivers
  } = useDrivers();

  useEffect(() => {
    setLoading(true);
    
    const limit = ITEMS_PER_PAGE;
    const offset = page * limit;

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
        onSelectDriver={driver => navigation.navigate('DriverPage', { driver })}
        drivers={drivers} 
        page={page}
        numberOfItemsPerPage={ITEMS_PER_PAGE}
        numberOfPages={total / ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
      <Button
        mode='contained-tonal'
        icon='flag'
        onPress={() => navigation.navigate('RacesPage')}
      >
        Races
      </Button>
    </ScrollView>
  )
}
