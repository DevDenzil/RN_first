import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, TextInput } from 'react-native';

const COLOR_INCREMENT = 15;

export const ColoredSquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, n) => {
    return -1 < color + n && color + n < 256 ? color + n : color;
  };

  const setRandomColor = () => {
    setRed(Math.round(Math.random() * 255));
    setGreen(Math.round(Math.random() * 255));
    setBlue(Math.round(Math.random() * 255));
  };

  const OneColor = ({ colorTitle, setter, color }) => {
    const colorText = color.toString();
    return (
      <View>
        <Text style={styles.text}>{colorTitle}: {color}</Text>
        <TextInput
          style={styles.text}
          value={colorText}
          inputMode="numeric"
          onChangeText={(e) => setter(Number(e))}
        />
        <Button
          onPress={() => setter(setColor(color, COLOR_INCREMENT))}
          title={`More ${colorTitle}`}
        />
        <Button
          onPress={() => setter(setColor(color, -1 * COLOR_INCREMENT))}
          title={`Less ${colorTitle}`}
        />
      </View>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Colored Square</Text>
      <Button onPress={() => setRandomColor()} title="Set Random color" />
      <OneColor colorTitle="Red" setter={setRed} color={red} />
      <OneColor colorTitle="Green" setter={setGreen} color={green} />
      <OneColor colorTitle="Blue" setter={setBlue} color={blue} />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
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
