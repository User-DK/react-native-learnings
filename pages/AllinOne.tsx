import React from 'react';

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from '../components/Cards/FlatCards';
import ElevatedCards from '../components/Cards/ElevatedCards';
import FancyCards from '../components/Cards/FancyCards';
import ActionCards from '../components/Cards/ActionCards';
import BgChanger from '../components/BgChanger';
import DiceRoller from '../components/DiceRoller';
import PasswordGenerator from '../components/PasswordGenerator';

const AllinOne = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
      <ScrollView>
        <Text></Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <BgChanger />
        <DiceRoller />
        {/* <CurrencyConverter /> */}
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllinOne;
