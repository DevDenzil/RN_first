import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { ImageDetail } from '../components/ImageDetails';

export const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail
        text="Beach"
        imageSource={require('../../assets/img/beach.jpg')}
        score="9"
      />
      <ImageDetail
        text="Forest"
        imageSource={require('../../assets/img/forest.jpg')}
        score="5"
      />
      <ImageDetail
        text="Mountain"
        imageSource={require('../../assets/img/mountain.jpg')}
        score="8"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
