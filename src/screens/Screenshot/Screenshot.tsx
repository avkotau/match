import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ScreenshotProps} from '../../types';
import {hScale, vScale} from '../../baseSize.ts';
import {CopuIcon, GoBack, PlusIcon} from '../../assests';
import LinearGradient from 'react-native-linear-gradient';
import {gStyle} from '../../styles';
import {
  ScreenshotCard,
  TitleName,
  WhiteGreenButton,
  WrapperComponentPink,
} from '../../components';

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

          <View style={styles.outerContainer}>
            <LinearGradient
              colors={['#FFFFFF', '#E0E0E0']}
              style={styles.gradientContainer}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0, 0.2, 1]}>
              <View style={styles.innerContainer}>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis est ut dui faucibus dapibus nec vel erat.
                </Text>
                <View style={styles.wrapperCopy}>
                  <CopuIcon />
                  <Text style={styles.copy}>copy</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <WhiteGreenButton
            handlePress={() => {}}
            title={'Generate more'}
            isShadow={true}
            stylePros={{
              borderRadius: vScale(50),
              width: hScale(939),
              height: vScale(184),
            }}
          />
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

  outerContainer: {
    width: hScale(939),
    paddingBottom: vScale(100),
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  gradientContainer: {
    flex: 1,
    borderRadius: 18,
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
