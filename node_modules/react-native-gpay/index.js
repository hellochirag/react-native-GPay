/** 
 * React Native G-Pay Lib
 * 
 * @description
 * React Native Google Pay Payment Method Tokenization Specification 
 * 
 * @author Chirag Jadav <chiragjadav237@gmail.com>
 * @format */

import { NativeModules, requireNativeComponent } from 'react-native'

export default NativeModules.GPay

export const GooglePayImage = requireNativeComponent('GooglePayImageView')

