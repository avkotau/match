import {Animated, StyleSheet} from 'react-native';
import {gStyle} from '../../styles';
import {hScale} from '../../baseSize.ts';
import {ReactNode, useEffect, useRef, useState} from 'react';
import {TitleName} from '../../components';

type Props = {
  children: ReactNode;
};

export const WithSplashScreen = ({children}: Props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [isAppReady, setIsAppReady] = useState(true);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => setIsAppReady(false));
  }, []);

  return (
    <>
      {isAppReady && children ? (
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
          <TitleName styleTitle={{color: '#ED217C'}} />
        </Animated.View>
      ) : (
        children
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#040404',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...gStyle.sHead,
    fontSize: hScale(100),
    fontWeight: '700',
    transform: [{scaleX: 1.4}, {scaleY: 0.85}],
  },
});
