import React from 'react';
import { View, Image, Text } from 'react-native';
import bat from '../../../assets/bat.png'
import { styles } from './Styles';

export default function Logo() {
  return (
    <>
      <View>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={bat} style={styles.image}/>
      </View>
    </>
  );
}