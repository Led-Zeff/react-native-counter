import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Counter: {counter}</Text>

      <Fab text="-1" position="bottom-left" onPress={() => setCounter(counter - 1)} />
      <Fab text="+1" position="bottom-right" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    textAlign: 'center'
  }
});
