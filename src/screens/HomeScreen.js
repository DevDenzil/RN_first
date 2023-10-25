import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Bla Bla</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      <Button
        onPress={() => navigation.navigate('Lists')}
        title="Go to List Deno"
      />

      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to Image Demo"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter"
      />

      <Button
        onPress={() => navigation.navigate('Colors')}
        title="Go to Colors"
      />

      <Button
        onPress={() => navigation.navigate('ColoredSquare')}
        title="Go to Color Square"
      />
    </View>
  );
};
;
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
