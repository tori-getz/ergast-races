import React from 'react';

import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import type { RootStackParamList } from "./types";

import { adaptNavigationTheme } from 'react-native-paper';
import { CustomAppBar } from '../components/custom-app-bar.component';

import { DriversPage } from '~/presentation/pages/drivers.page';
import { DriverPage } from '../pages/driver.page';
import { RacesPage } from '../pages/races.page';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

export const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <Navigator
        screenOptions={{
          header: props => <CustomAppBar {...props} />
        }}
      >
        <Screen
          name='DriversPage'
          component={DriversPage}
          options={{
            title: 'Drivers'
          }}
        />
        <Screen
          name='DriverPage'
          component={DriverPage}
          options={{
            title: 'Driver'
          }}
        />
        <Screen
          name='RacesPage'
          component={RacesPage}
          options={{
            title: 'Races'
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
