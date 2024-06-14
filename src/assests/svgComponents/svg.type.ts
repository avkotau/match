import {SvgProps} from "react-native-svg";

export interface ExtendedSvgProps extends SvgProps {
    xmlns?: string;
    xmlSpace?: string;
    xmlnsXlink?: string;
    size?: number;
    top?: number;
    width?: number;
    height?: number;
    fill?: string
}
