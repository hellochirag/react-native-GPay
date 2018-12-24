# React Native GPay
[![react-native version](https://img.shields.io/badge/react--native-0.41-0ba7d3.svg?style=flat-square)](http://facebook.github.io/react-native/releases/0.40)
[![npm](https://img.shields.io/npm/v/react-native-payments.svg?style=flat-square)](https://www.npmjs.com/package/react-native-payments)
[![npm](https://img.shields.io/npm/dm/react-native-payments.svg?style=flat-square)](https://www.npmjs.com/package/react-native-payments)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Accept Payments with Android Pay using the [Payment Request API](https://paymentrequest.show).

__Features__
- __Simple.__ No more checkout forms.
- __Effective__. Faster checkouts that increase conversion.
- __Future-proof__. Use a W3C Standards API, supported by companies like Google, Firefox and others.
- __Cross-platform__. Share payments code between your iOS, Android, and web apps.
- __Add-ons__. Easily enable support for Stripe or Braintree without add-ons.


## Table of Contents
- [Sample](#Sample)
- [Installation](#installation)
- [Usage](#usage)
- [Testing Payments](#testing-payments)
- [Google Pay button](#google-pay-button)
- [API](#api)
- [Resources](#resources)
- [License](#license)

# react-native-gpay


## Sample
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
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNGpay.sln` in `node_modules/react-native-gpay/windows/RNGpay.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Gpay.RNGpay;` to the usings at the top of the file
  - Add `new RNGpayPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNGpay from 'react-native-gpay';

// TODO: What to do with the module?
RNGpay;
```
  
