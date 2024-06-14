import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {gStyle} from '../../styles';
import {vScale} from '../../baseSize.ts';

type Props = {
  title: string;
  isShadow?: boolean;
  handlePress: () => void;
  stylePros?: ViewStyle;
} & TouchableOpacityProps;

export const UnlockButton = ({
  title,
  isShadow,
  handlePress,
  stylePros,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, isShadow && styles.shadowBackground, stylePros]}
      activeOpacity={0.8}
      onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    elevation: 3,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowBackground: {
    shadowColor: '#00A676',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },

  text: {
    ...gStyle.sText,
    fontSize: vScale(67),
    fontWeight: '700',
    textAlign: 'center',
  },
});
