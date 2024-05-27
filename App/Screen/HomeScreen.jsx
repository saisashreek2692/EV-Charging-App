import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import HeaderScreen from './HeaderScreen'

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <HeaderScreen />
      </View>
      <AppMapView />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    padding: 10,
    marginHorizontal: 20
  }
})