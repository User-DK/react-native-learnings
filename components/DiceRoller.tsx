import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const images = [
  require('../assets/1.png'),
  require('../assets/2.png'),
  require('../assets/3.png'),
  require('../assets/4.png'),
  require('../assets/5.png'),
  require('../assets/6.png'),
];

export default function DiceRoller() {
  const initialIndex = Math.floor(Math.random() * 6);
  const [imgIndex, setImgIndex] = useState(initialIndex);

  function handleImgChange() {
    const newIndex = Math.floor(Math.random() * 6);
    setImgIndex(newIndex);
  }

  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={images[imgIndex]} />
      <TouchableOpacity style={styles.btn} onPress={handleImgChange}>
        <Text>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  btn: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
  },
});
