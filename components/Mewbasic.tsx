import React from 'react';
import {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function Mewbasic(): JSX.Element {
  //this is typescript
  const isDarkMode = useColorScheme() === 'dark';

  const [text, setText] = useState('Mew mew here');

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{fontSize: 25, fontFamily: 'Roboto'}}>Mew Diaries</Text>
        <View style={styles.container}>
          <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
            Hello Mew!!
          </Text>
          <Image
            source={{
              uri: 'https://www.womansworld.com/wp-content/uploads/2024/08/Funny-Cat-Vidoes.jpg',
            }}
            style={{width: 200, height: 200}}></Image>
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={setText}
          value={text}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fffff',
  },
  darkText: {
    color: '#00000',
  },
});

export default Mewbasic;
