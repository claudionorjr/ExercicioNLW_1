import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface Props {
  isSwitched: boolean;
}

export function Header({isSwitched}: Props) {
  return (
    <View style={[styles.header, {backgroundColor: isSwitched ? '#483C67' : '#273FAD',}]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  switch: {
    color:'#fff',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
