import React from 'react'
import { GestureResponderEvent, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'

interface Props {
  onPress: (event: GestureResponderEvent) => void,
  text: string,
  position: 'bottom-left' | 'bottom-right'
}

export const Fab = ({onPress, text, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity style={ position == 'bottom-left' ? styles.buttonBL : styles.buttonBR } activeOpacity={ 0.8 } onPress={onPress}>
        <View style={ styles.fab }>
          <Text style={ styles.fabText }>{ text }</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={ position == 'bottom-left' ? styles.buttonBL : styles.buttonBR }>
        <TouchableNativeFeedback onPress={onPress} background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }>
          <View style={ styles.fab }>
            <Text style={ styles.fabText }>{ text }</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    textAlign: 'center'
  },
  buttonBL: {
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  buttonBR: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
