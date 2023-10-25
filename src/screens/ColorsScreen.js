import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';

export const ColorsScreen = () => {
  const [colors, setColors] = useState([]);

  const addColor = () => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const newColor = `rgb(${red}, ${green}, ${blue})`;
    setColors([...colors, newColor]);
  };

  return (
    <View>
      <Button title="Add color" onPress={() => addColor()} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
