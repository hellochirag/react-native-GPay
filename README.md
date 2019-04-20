# React Native GPay


The source code is **100% Native**, and everything resides in the [/lib](https://github.com/JadavChirag/react-native-GPay.git) folder.

## Show some :heart: and star the repo to support the project

[![react-native version](https://img.shields.io/badge/react--native-0.41-0ba7d3.svg?style=flat-square)](http://facebook.github.io/react-native/releases/0.40)
[![npm](https://img.shields.io/npm/v/react-native-payments.svg?style=flat-square)](https://www.npmjs.com/package/react-native-payments)
[![npm](https://img.shields.io/npm/dm/react-native-payments.svg?style=flat-square)](https://www.npmjs.com/package/react-native-payments)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


[![GitHub followers](https://img.shields.io/github/followers/JadavChirag.svg?style=plastic)](https://github.com/JadavChirag?tab=followers) ![Twitter Follow](https://img.shields.io/twitter/follow/JadavRadhe.svg?style=social)

Accept Payments with Android Pay using the [Payment Request API](https://paymentrequest.show).

__Features__
- __Example.__ No more checkout forms.
- __Effective__. Faster checkouts that increase conversion.
- __Future-proof__. Use a W3C Standards API, supported by companies like Google, Firefox and others.
- __Cross-platform__. Share payments code between your iOS, Android, and web apps.
- __Add-ons__. Easily enable support for Stripe or Braintree without add-ons.


<div>
 <img width="280px" src="https://github.com/JadavChirag/react-native-GPay/blob/master/image/Google-Pay-3.jpg"/>
<img width="280px" src="https://github.com/JadavChirag/react-native-GPay/blob/master/image/google-pay-cards.jpg" />
<img width="280px" src="https://github.com/JadavChirag/react-native-GPay/blob/master/image/google_pay_get_started.jpg"/>
</div>


## Table of Contents
- [Example](#Example)
- [Installation](#installation)
- [Usage](#usage)
- [Testing Payments](#testing-payments)
- [Google Pay button](#google-pay-button)
- [API](#api)
- [Resources](#resources)
- [License](#license)

# react-native-gpay

## 💻 Installation

## Example
You can run the sample by cloning the project and running:

```shell
$ react-native run android
```

## Getting started

`$ npm install react-native-gpay --save`

### Mostly automatic installation

`$ react-native link react-native-gpay`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-gpay` and add `RNGpay.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNGpay.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNGpayPackage;` to the imports at the top of the file
  - Add `new RNGpayPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-gpay'
  	project(':react-native-gpay').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-gpay/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-gpay')
  	```

#### Windows
[Read it!](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNGpay.sln` in `node_modules/react-native-gpay/windows/RNGpay.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Gpay.RNGpay;` to the usings at the top of the file
  - Add `new RNGpayPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
  
  ▪	Setting up Google Pay/Android Pay
	▪	Importing the Library
	▪	Initializing the Payment Request
	▪	Displaying the Payment Request
	▪	Aborting the Payment Request (Support Only in Andriod)
	▪	Processing Payments
	▪	Dismissing the Payment Request
  
  ##	Setting up Google Pay/Android Pay
	
  Before you can start accepting payments in your App, you'll need to setup Google Pay and/or Android Pay.
	▪	Android Pay

	1.	Add Android Pay and Google Play Services to your dependencies
	2.	Enable Android Pay in your Manifest

	Google has documentation on how to do this in their _[Setup Android Pay]        (https://developers.google.com/pay/api/android/guides/setup)_ guide.
  

##	Importing the Library
	Once Google Pay/Android Pay is enabled in your app, jump into your app's entrypoint and make the PaymentRequest globally available to your app.

		// index.js

```javascript
import GPay, { GooglePayImage } from 'react-native-gpay'

// TODO: What to do with the module?
GPay;
```
##	 Initializing the Payment Request
	To initialize a Payment Request, you'll need to provide Payment Request details.

▪  Card Networks Details
 
 ```
   const cardNetworks = ['AMEX', 'JCB', 'MASTERCARD', 'VISA'] // G-PAY SUPPORT CARD.
  ```
  
▪  Payment Request Details
    
    The Payment Request is where you defined the forms of payment that you accept. To enable Android Pay, we'll define a payment gateway of android-pay. We're also required to pass a data object to configures android Pay. This is where we provide our merchant id, define the supported card types and the currency we'll be operating in.
   
   ```
   const paymentRequest = {
  cardPaymentMethodMap: {
    gateway: {
      name: 'GATEWAY_NAME', // Identify your gateway and your app's gateway merchant identifier     https://developers.google.com/pay/api/android/reference/object#PaymentMethodTokenizationSpecification
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
```

▪  Check Google Pay (Android-Pay) Support.

  This function for check GPay Support Your App and Devices?

  ```
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
  ```
  

Once you've defined your paymentrequest you're ready to initialize your Payment Request.

```es6
  const paymentRequestToken = new GPay(GPay.ENVIRONMENT_TEST, paymentRequest);
```

🚨 Note: On Android, display items are not displayed within the Android Pay view. Instead, the User Flows documentation suggests showing users a confirmation view where you list the display items. When using React Native Payments, show this view after receiving the PaymentResponse.

## Displaying the Payment Request

Now that you've setup your Payment Request Token, displaying it is as simple as calling the show method.

```paymentRequestToken.show();```

## Processing Payments

Now that we know how to initialize, display, and dismiss a Payment Request, let's take a look at how to process payments.

When a user accepts to pay, GPay.show will resolve to a Payment Response.	

```
  const token = await GPay.show(
      GPay.ENVIRONMENT_TEST, // You can change environment here ENVIRONMENT_TEST,ENVIRONMENT_PRODUCTION
      paymentRequest // 
      ).catch(error => {
      this.setState({ text: `error: ${error}` })
      return error;
    })
```

You can learn more about server-side decrypting of Payment Tokens on Google Payment Token Format Reference documentation.

## API

NativePayments
PaymentRequest
PaymentRequestUpdateEvent
PaymentResponse

## Resources

		▪ Payment Request
		▪ Introducing the Payment Request API
		▪ Deep Dive into the Payment Request API
		▪ Web Payments
	 	▪ Android Pay
		▪ Setup Android Pay
		▪ Tutorial
		▪ Brand Guidelines
		▪ Gateway Token Approach
		▪ Network Token Approach
		
## 💰 Donations

This project needs you! If you would like to support this project's further development, the creator of this project or the continuous maintenance of this project, feel free to donate. Your donation is highly appreciated (and I love food, coffee and beer). Thank you!

## 👨 Developed By

```
Jadav Chirag
```


<a href="https://twitter.com/JadavRadhe?s=09"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60"></a>
<a href="https://www.linkedin.com/in/jadav-chirag-8945a2156/"><img src="https://user-images.githubusercontent.com/35039342/55471530-94b34280-5627-11e9-8c0e-6fe86a8406d6.png" width="60"></a>
<a href="https://www.facebook.com/profile.php?id=100007883057762"><img src="https://github.com/aritraroy/social-icons/blob/master/facebook-icon.png?raw=true" width="60"></a>


# 👍 How to Contribute

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

		

## 📃 License

Licensed under the MIT License, Copyright © 2018, Chirac Jadav.

See [LICENSE](https://github.com/JadavChirag/react-native-GPay/blob/master/LICENSE) for more information.


