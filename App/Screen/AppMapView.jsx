import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import MapViewStyle from "../Utils/MapViewStyle.json";
import { UserLocationContext } from "../Context/UserLocationContext"

export default function AppMapView() {

  const {location, setLocation} = useContext(UserLocationContext)

  return location?.latitude && (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        showsUserLocation="true"
        customMapStyle={MapViewStyle}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
