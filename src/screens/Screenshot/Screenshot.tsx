import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ScreenshotProps} from '../../types';
import {hScale, vScale} from '../../baseSize.ts';
import {CopuIcon, GoBack, PlusIcon} from '../../assests';
import {gStyle} from '../../styles';
import {
  ScreenshotCard,
  TitleName,
  WhiteGreenButton,
  WrapperComponentPink,
} from '../../components';
import {Shadow} from 'react-native-shadow-2';

export const Screenshot = ({navigation}: ScreenshotProps) => {
  const handlePickImage = () => {
    console.log('Pick image');
  };

  return (
    <WrapperComponentPink>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{height: vScale(149.1), width: hScale(79.5)}}
              onPress={() => navigation?.navigate('ScreenshotsCardScreen')}>
              <GoBack fill={'#FFFFFF'} />
            </TouchableOpacity>
            <TitleName />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handlePickImage}>
              <PlusIcon stroke={'#FFFFFF'} strokeWidth={2.4} />
            </TouchableOpacity>
          </View>

          <ScreenshotCard title={"User's screenshot"} />
          <Text style={styles.clickText}>Tap to copy rizz</Text>
          <View style={styles.wrapper}>
            <View style={styles.containerCopy}>
              {Platform.OS === 'android' && (
                <Shadow
                  distance={25}
                  startColor={'rgba(255,255,255,0.31)'}
                  endColor={'#FFFFFF00'}
                  paintInside={false}
                  style={{
                    width: hScale(939),
                    height: vScale(641),
                    borderRadius: vScale(50),
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />
              )}
              <View style={styles.outerContainer}>
                <Shadow
                  distance={10}
                  startColor={'#FFFFFF'}
                  endColor={'#FFFFFF00'}
                  offset={[0, 0]}
                  paintInside={true}
                  sides={{top: true, start: true, bottom: true, end: true}}
                  corners={{
                    topStart: true,
                    topEnd: true,
                    bottomStart: true,
                    bottomEnd: true,
                  }}>
                  <Shadow
                    distance={6}
                    startColor={'#E0E0E0'}
                    endColor={'#E0E0E000'}
                    offset={[5.5, 6]}
                    paintInside={true}
                    sides={{top: true, start: true, bottom: true, end: true}}
                    corners={{
                      topStart: true,
                      topEnd: true,
                      bottomStart: true,
                      bottomEnd: true,
                    }}
                    style={{
                      borderRadius: vScale(50),
                    }}>
                    <View style={styles.innerContainer}>
                      <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis est ut dui faucibus dapibus nec vel erat.
                      </Text>
                      <View style={styles.wrapperCopy}>
                        <CopuIcon />
                        <Text style={styles.copy}>copy</Text>
                      </View>
                    </View>
                  </Shadow>
                </Shadow>
              </View>
            </View>
          </View>
          <WhiteGreenButton title={'Generate more'} />
        </View>
      </ScrollView>
    </WrapperComponentPink>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vScale(193),
    paddingHorizontal: hScale(115),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: vScale(160),
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },

  addButton: {
    height: vScale(111),
    width: hScale(111),
  },
  wrapper: {
    paddingBottom: vScale(100),
  },
  containerCopy: {
    justifyContent: 'center',
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },

  outerContainer: {
    width: hScale(939),
    height: vScale(641),
    borderRadius: vScale(50),
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },

  innerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  clickText: {
    paddingVertical: vScale(100),
    ...gStyle.sText,
    color: '#FFFFFF',
    fontSize: vScale(65),
  },
  wrapperCopy: {
    width: hScale(88.6),
    height: vScale(96.3),
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    ...gStyle.sText,
    color: '#040404',
    fontSize: vScale(40),
    fontWeight: '200',
  },

  text: {
    ...gStyle.sText,
    color: '#040404',
    fontSize: vScale(65),
    flex: 6,
    marginRight: 30,
  },
});
