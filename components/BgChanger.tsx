import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function BgChanger() {
  const [randomColor, setRandomColor] = useState('#ffffff');

  function handleColorChange() {
    const colorRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += colorRange[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  }

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <Text style={styles.text}>This is {randomColor}</Text>
        <TouchableOpacity onPress={handleColorChange} style={styles.button}>
          <Text style={styles.buttonText}>Click here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
