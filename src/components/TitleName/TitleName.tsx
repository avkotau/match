import {StyleSheet, Text, TextStyle} from 'react-native';
import {gStyle} from '../../styles';
import {hScale} from '../../baseSize.ts';

type Props = {
  styleTitle?: TextStyle;
};

export const TitleName = ({styleTitle}: Props) => {
  return <Text style={[styles.title, styleTitle]}>RIZZGPT</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...gStyle.sHead,
    fontSize: hScale(100),
    fontWeight: '700',
    transform: [{scaleX: 1.4}, {scaleY: 0.85}],
  },
});
