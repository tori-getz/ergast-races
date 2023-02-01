import React from "react";

import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const Loading: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})
