import Svg, {Path} from 'react-native-svg';
import {ExtendedSvgProps} from './svg.type';

export const PlusIcon = ({
  stroke = '#000',
  strokeWidth = 2,
  ...props
}: ExtendedSvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}>
    <Path strokeWidth={strokeWidth} stroke={stroke} d="M4 12h16m-8-8v16" />
  </Svg>
);
