import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: '20' },
    { name: 'Friend #2', age: '25' },
    { name: 'Friend #3', age: '20' },
    { name: 'Friend #4', age: '25' },
    { name: 'Friend #5', age: '20' },
    { name: 'Friend #6', age: '25' },
    { name: 'Friend #7', age: '20' },
    { name: 'Friend #8', age: '25' },
    { name: 'Friend #9', age: '20' },

  ];

  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});
