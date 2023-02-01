import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Loading } from '~/presentation/components/loading.component';
import { useDrivers } from '~/presentation/hooks/use-drivers.hook';
import { RootState } from '~/presentation/state/root.store';

export const DriversPage: React.FC = () => {
  const [ loading, setLoading ] = useState<boolean>(true);

  const {
    drivers,
    loadDrivers
  } = useDrivers();

  useEffect(() => {
    setLoading(false);
    loadDrivers(30, 0);
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <ScrollView>
      <Text>{JSON.stringify(drivers)}</Text>
    </ScrollView>
  )
}
