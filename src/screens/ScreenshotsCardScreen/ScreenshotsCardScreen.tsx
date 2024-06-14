import {useState} from 'react';

import {
  Animated,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {hScale, vScale} from '../../baseSize.ts';
import ScrollView = Animated.ScrollView;
import {
  ScreenshotsCard,
  TitleName,
  UnlockButton,
  WrapperComponentPink,
} from '../../components';
import {ScreenshotsCardScreenProps} from '../../types';

type Props = {
  uri?: string;
  title?: string;
};

export const ScreenshotsCardScreen = ({
  navigation,
}: ScreenshotsCardScreenProps) => {
  const [screenshots, setScreenshots] = useState<Props[]>([
    {
      title: 'User’s screenshot',
    },
    {
      title: 'User’s screenshot',
    },
    {
      title: 'User’s screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
    {
      uri: 'https://dummyimage.com/150x250/040404/FFFFF.png&text=User%E2%80%99s+screenshot',
    },
  ]);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const customLayoutAnimationConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    delete: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.scaleXY,
    },
  };

  const handleDelete = (index: number) => {
    LayoutAnimation.configureNext(customLayoutAnimationConfig);
    const newScreenshots = [...screenshots];
    newScreenshots.splice(index, 1);
    setScreenshots(newScreenshots);
  };

  const handlePress = () => {
    navigation?.navigate('Screenshot');
  };

  return (
    <WrapperComponentPink>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: vScale(200),
        }}>
        <TitleName styleTitle={{paddingBottom: hScale(30)}} />
        <ScreenshotsCard screenshots={screenshots} onDelete={handleDelete} />
      </ScrollView>
      <LinearGradient
        colors={['#04040400', '#040404']}
        locations={[0, 0.1]}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <UnlockButton
          title={'Upload Screenshot'}
          isShadow={true}
          handlePress={handlePress}
          stylePros={{
            backgroundColor: '#00A676',
            width: hScale(939),
            height: vScale(184),
          }}
        />
      </LinearGradient>
    </WrapperComponentPink>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingTop: vScale(193),
    marginBottom: hScale(450),
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: vScale(629.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
