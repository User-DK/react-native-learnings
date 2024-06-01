import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} >
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>

          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
            <Image
              source={{
                uri: 'https://www.womansworld.com/wp-content/uploads/2024/08/Funny-Cat-Vidoes.jpg',
              }}
              style={styles.images}></Image>
          </View>

          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    elevation: 10,
    borderRadius: 5,
    margin: 8,
    //useful for ios only
     shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50EAA4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
  images: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});