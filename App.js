/**
 * React Native G-Pay NPM Lib
 * https://github.com/JadavChirag
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import GPay, { GooglePayImage } from './libs/GPay'
import GPay, { GooglePayImage } from 'react-native-gpay'

const cardNetworks = ['AMEX', 'JCB', 'MASTERCARD', 'VISA'] // G-PAY SUPPORT CARD.

const paymentRequest = {
  cardPaymentMethodMap: {
    gateway: {
      name: 'GATEWAY_NAME', // Identify your gateway and your app's gateway merchant identifier https://developers.google.com/pay/api/android/reference/object#PaymentMethodTokenizationSpecification
      merchantId: '055XXXXXXXXXXXXX336',  // YOUR_GATEWAY_MERCHANT_ID
      clientKey: 'sandbox_XXXXXXXXXXXXndxm44jw', // OPTIONAL YOUR_TOKENIZATION_KEY. Need for BRAINTREE & STRIPE GATEWAY.
      sdkVersion: 'client.VERSION' // OPTIONAL YOUR Client.VERSION. Need for BRAINTREE & STRIPE GATEWAY.
    },
    cardNetworks
  },
  transaction: {
    totalPrice: '11',
    totalPriceStatus: 'FINAL', // PAYMENT AMOUNT STATUS 
    currencyCode: 'USD' // CURRENCY CODE
  },
  merchantName: 'XXXXXXXXXXXX'  // MERCHANT NAME Information about the merchant requesting payment information
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAvailable: null,
      text: ''
    }
  }
  /**
   * This function for check GPay Support Your App and Devices.
   */
  onPressCheck = async () => {
    const isAvailable = await GPay.checkGPayIsEnable(
      GPay.ENVIRONMENT_TEST, // You can change environment here ENVIRONMENT_TEST,ENVIRONMENT_PRODUCTION
      cardNetworks
    ).catch(error => {
      console.warn(error.toString())
      return false
    })
    this.setState({ isAvailable })
  }

  /**
   * 
   */
  onPressPay = async () => {
    const token = await GPay.show(
      GPay.ENVIRONMENT_TEST, // You can change environment here ENVIRONMENT_TEST,ENVIRONMENT_PRODUCTION
      paymentRequest // 
    ).catch(error => {
      this.setState({ text: `error: ${error}` })
      return error;
    })
    if (token) {
      this.setState({ text: `token: ${token}` })
    }
  }

  render() {
    const { isAvailable, text } = this.state

    return (
      <View style={styles.container}>
        <Text>Price  yen</Text>
        <Text style={{ marginTop: 50 }}>
          {isAvailable === true
            ? 'Available!!'
            : isAvailable === false
              ? 'Not available'
              : null}
        </Text>
        <TouchableOpacity
          onPress={this.onPressCheck}
          style={[
            {
              marginTop: 10,
              backgroundColor: 'blue',
              padding: 10
            },
            styles.button
          ]}>
          <Text style={{ color: 'white' }}>
            Check if Google Pay is available
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isAvailable !== true}
          onPress={this.onPressPay}
          style={{ marginTop: 50 }}>
          <GooglePayImage
            style={[styles.button, { opacity: isAvailable === true ? 1 : 0.3 }]}
          />
        </TouchableOpacity>

        <Text style={{ marginTop: 20 }}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
