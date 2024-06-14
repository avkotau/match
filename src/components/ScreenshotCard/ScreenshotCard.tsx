import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {hScale, vScale} from '../../baseSize.ts';

import {gStyle} from '../../styles';

type Props = {
  style?: ViewStyle;
  title: string;
  textStyle?: TextStyle;
};

export const ScreenshotCard = ({style, title, textStyle}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hScale(939),
    height: vScale(1648),
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...gStyle.sText,
    color: '#000000',
    fontSize: vScale(100),
  },
});
