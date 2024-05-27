import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../Utils/Colors';

export default function HeaderScreen() {

    const { user } = useUser();

  return (
    <View style={styles.headerContainer}>
      <Image source={{uri: user?.imageUrl}} style={{width: 45, height: 45, borderRadius: 99}} />
      <Image source={require('../../assets/images/logo.png')} style={{width: 200, height: 45, objectFit: 'contain'}} />
      <FontAwesome name="filter" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.TRANSPARENT
    }
})