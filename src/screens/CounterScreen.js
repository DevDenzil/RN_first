import React from 'react';
import { Text, StyleSheet, Button, View, Image } from 'react-native';
import { useState } from 'react';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <View>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
