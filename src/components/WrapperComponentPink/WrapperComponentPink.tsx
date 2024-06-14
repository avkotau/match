import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export const WrapperComponentPink = ({children}: Props) => {
  return (
    <LinearGradient
      colors={['#ED217C', '#040404']}
      locations={[0, 0.26]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.fullScreenGradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullScreenGradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});
