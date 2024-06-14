import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const baseWidth = 1170;
const baseHeight = 2532;

export const hScale = (size: number): number =>
  (screenWidth / baseWidth) * size;
export const vScale = (size: number): number =>
  (screenHeight / baseHeight) * size;
