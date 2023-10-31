import React, { useReducer } from 'react';
import { Text, StyleSheet, Button, View, TextInput } from 'react-native';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue:number}
  // action === {colorToChange: 'red' || 'green' || 'blue', amount: number}
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

export const ColoredSquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const setRandomColor = () => {
    setRed(Math.round(Math.random() * 255));
    setGreen(Math.round(Math.random() * 255));
    setBlue(Math.round(Math.random() * 255));
  };

  const OneColor = ({ colorTitle, setter, color }) => {
    const colorText = color.toString();
    return (
      <View>
        <Text style={styles.text}>
          {colorTitle}: {color}
        </Text>
        <Button onPress={() => console.log(1)} title={`More ${colorTitle}`} />
        <Button onPress={() => console.log(1)} title={`Less ${colorTitle}`} />
      </View>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Colored Square</Text>
      <Button onPress={() => setRandomColor()} title="Set Random color" />
      <OneColor colorTitle="Red" />
      <OneColor colorTitle="Green" />
      <OneColor colorTitle="Blue" />
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
