import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const ComponentsScreen = () => {
  const name = 'Denys';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle1}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle1: {
    fontSize: 20,
  },
});
