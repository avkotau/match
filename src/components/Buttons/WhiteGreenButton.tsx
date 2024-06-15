import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {hScale, vScale} from '../../baseSize.ts';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {gStyle} from '../../styles';

type Props = {
  title: string;
  isShadow: boolean;
  handlePress: () => void;
  stylePros?: ViewStyle;
};

export const WhiteGreenButton = ({
  title,
  isShadow,
  handlePress,
  stylePros,
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    handlePress();
  };

  return (
    <View
      style={[
        styles.container,
        isShadow && styles.shadowBackground,
        stylePros,
      ]}>
      <View style={[styles.buttonWrapper, stylePros]}>
        <LinearGradient
          // Basic button background
          colors={['#00A676', '#00A676']}
          start={{x: 0.5, y: 0.5}}
          end={{x: 0.5, y: 1}}
          style={[styles.button, stylePros]}>
          <View style={StyleSheet.absoluteFill}>
            <LinearGradient
              // Light from above
              colors={['#FFFFFF', '#00A67600']}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 0.4}}
              style={StyleSheet.absoluteFill}
            />
            <LinearGradient
              // Light from the left side
              colors={['#FFFFFF', '#00A67600']}
              start={{x: 0, y: 0.5}}
              end={{x: 0.1, y: 0.6}}
              style={StyleSheet.absoluteFill}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            {isPressed && (
              <View style={(StyleSheet.absoluteFill, {borderRadius: 20})}>
                <LinearGradient
                  colors={['#FFFFFF', '#00A67600']}
                  style={StyleSheet.absoluteFill}
                />
              </View>
            )}
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //for android
  buttonWrapper: {
    overflow: 'hidden',
  },
  buttonBase: {
    width: hScale(939),
    height: vScale(184),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: vScale(50),
  },
  button: {
    width: '100%',
    height: '100%',
    paddingHorizontal: hScale(37),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  },
});
