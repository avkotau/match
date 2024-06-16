import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {gStyle} from '../../styles';
import {vScale} from '../../baseSize.ts';
import {Shadow} from 'react-native-shadow-2';

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
  const androidShadow = {
    distance: 25,
    startColor: '#00A67650',
    endColor: '#00A67600',
    paintInside: false,
    corners: {topStart: true, topEnd: true, bottomStart: true, bottomEnd: true},
  };

  const buttonComponent = (
    <TouchableOpacity
      style={[styles.button, isShadow && styles.shadowBackground, stylePros]}
      activeOpacity={0.8}
      onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {Platform.OS === 'android' && isShadow ? (
        <Shadow {...androidShadow}>{buttonComponent}</Shadow>
      ) : (
        buttonComponent
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 30,
    elevation: 3,
    width: '100%',
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
