import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Hallo </Text>
    </View>
  );
}

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
