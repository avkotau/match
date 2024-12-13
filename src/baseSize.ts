import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const baseWidth = 1170;
const baseHeight = 2532;
const dpi = 160;

export const hScale = (size: number): number =>
  (screenWidth / baseWidth) * size;
export const vScale = (size: number): number =>
  (screenHeight / baseHeight) * size;

// Calculate screen diagonal in inches
const screenDiagonal =
  Math.sqrt(Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2)) / dpi;

// Check if the diagonal is greater than 5.5 inches
export const isGreaterThan5Point5Inch = screenDiagonal > 5.7;

export const isGreaterThan5PointFiveInch = screenDiagonal > 5.5;


