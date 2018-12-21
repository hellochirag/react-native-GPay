
# react-native-gpay

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
  