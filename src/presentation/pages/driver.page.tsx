import React from "react"

import type { StackScreenProps } from "@react-navigation/stack"
import type { RootStackParamList } from "../navigation/types"
import { List } from "react-native-paper"
import { Linking, View } from "react-native"

type DriverPageProps = StackScreenProps<RootStackParamList, 'DriverPage'>

export const DriverPage: React.FC<DriverPageProps> = ({
  route: {
    params: {
      driver
    }
  }
}) => {
  return (
    <View>
      <List.Item
        title='Driver name'
        description={`${driver.familyName} ${driver.givenName}`}
      />
      {driver.permanentNumber && (
        <List.Item
          title='Permanent Number'
          description={driver.permanentNumber}
        />
      )}
      <List.Item
        title='Nationality'
        description={driver.nationality}
      />
      <List.Item
        title='Date of Birth'
        description={driver.dateOfBirth}
      />
      <List.Item
        title='Description'
        description={driver.url}
        onPress={() => Linking.openURL(driver.url)}
        right={props => <List.Icon icon='arrow-right' {...props} />}
      />
    </View>
  )
}
