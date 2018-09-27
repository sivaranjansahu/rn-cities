/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import Cityinput from './src/components/cityinput/cityinput';
import Citylist from './src/components/citylist/citylist'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    cityfield: '',
    cities: [],

  }

  addHandler = () => {
    if (this.state.cityfield != '') {
      this.setState((prevState) => ({
        cities: prevState.cities.concat({
          key:Math.random(),
          value:prevState.cityfield
        }),
        cityfield: ''

      })
      )
    }

  }

  textChangeHandler = text => {
    this.setState((prevState) => {
      return {
        cityfield: text
      }
    }
    )
  }

  placeDeleteHandler = (key) => {
    this.setState((prevState) => {
      return {
        cities: prevState.cities.filter((place) => {
          return place.key !=key
        })
      }
    })
  }
  render() {

    return (
      <View style={styles.container}>
        <Cityinput
          addHandler={this.addHandler}
          val={this.state.cityfield}
          textChangeHandler={this.textChangeHandler}
        />
        <Citylist
          list={this.state.cities}
          onItemDeleted={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding:15

  },
  inputContainer: {
    height: '40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  citylists: {
    padding: 15,
    width: '100%'
  }

});
