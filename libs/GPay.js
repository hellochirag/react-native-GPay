import { NativeModules, requireNativeComponent } from 'react-native'

export default NativeModules.GPay

export const GooglePayImage = requireNativeComponent('GooglePayImageView')
