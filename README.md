# react-native-font-loader
[![npm version](https://badge.fury.io/js/react-native-font-loader.svg)](https://badge.fury.io/js/react-native-font-loader)[![Build Status](https://travis-ci.org/unimonkiez/react-native-font-loader.svg?branch=master)](https://travis-ci.org/unimonkiez/react-native-font-loader)

## Import and use fonts easily in your react-native app

## Usage
* Install
  ```bash
  # file-loader is peerDependency
  npm install --save-dev react-native-font-loader file-loader
  # or yarn
  yarn add -D react-native-font-loader file-loader
  ```
* Add loader to your `webpack-config`
  ```js
  ...
   module: {
      rules: [
        {
            test: /\.ttf$/,
            use: [
              {
                loader: 'react-native-font-loader',
                options: {
                  path: './assets/',
                },
              },
            ]
        }
      ]
   }
  ```
* Import ttfs and use them in your code!
  ```jsx
  import React, { Component } from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import someFontFamily from 'some.ttf';

  const stylesheet = StyleSheet.create({
    welcomeText: {
      fontFamily: someFontFamily,
      fontSize: 24,
    },
  });

  export default class App extends Component {
    render() {
      return (
        <View>
          <Text style={stylesheet.welcomeText}>
            Welcome to my React app!
          </Text>
        </View>
      );
    }
  }
  ```
