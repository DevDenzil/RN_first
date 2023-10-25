import React from 'react';
import { Text, StyleSheet, Button, View, Image } from 'react-native';

export const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.text}</Text>
      <Text>Image score - {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
