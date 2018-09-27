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
import Citylist from './src/components/citylist/citylist';
import CityDetails from './src/components/citydetails/citydetails'

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
    selectedCity:null

  }

  addHandler = () => {
    if (this.state.cityfield != '') {
      this.setState((prevState) => ({
        cities: prevState.cities.concat({
          key: Math.random().toString(),
          value: prevState.cityfield,
          image: {
            uri: "https://www.mikesbiketours.com/munich/images/Tour%20Photos%20570X%20380/Munich-&-Beyond.jpg",
            height: 250,
            width: 350
          }
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
          return place.key != key
        })
      }
    })
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedCity: prevState.cities.find(city => {
          return city.key === key
        })
      }
    })
  }

  closeModal=()=>{
    this.setState(prevState=>{
      return{
        selectedCity:null
      }
      
    })
  }
  render() {

    return (
      <View style={styles.container}>
        <CityDetails selectedCity={this.state.selectedCity} closeModal={this.closeModal}  />
        <Cityinput
          addHandler={this.addHandler}
          val={this.state.cityfield}
          textChangeHandler={this.textChangeHandler}
        />
        <Citylist
          list={this.state.cities}
          onItemDeleted={this.placeSelectedHandler}
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
    padding: 15

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
