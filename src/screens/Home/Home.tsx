import {StyleSheet, Text, View} from 'react-native';

import {hScale, vScale} from '../../baseSize.ts';

import {HomeProps} from '../../types';
import {gStyle} from '../../styles';
import {
  Card,
  TitleName,
  UnlockButton,
  WrapperComponentPink,
} from '../../components';

export const Home = ({navigation}: HomeProps) => {
  const handlePress = () => {
    navigation?.navigate('Screenshot');
  };

  return (
    <WrapperComponentPink>
      <View style={styles.wrapper}>
        <TitleName styleTitle={{paddingBottom: vScale(372.4)}} />
        <Text style={styles.subtext}>Upload a screenshot of a chat or bio</Text>
        <View style={styles.container}>
          <Card
            angle={345}
            source={require('../../assests/images/screen_3.png')}
          />
          <Card
            angle={0}
            source={require('../../assests/images/screen_2.png')}
            isCenter={true}
          />
          <Card
            angle={15}
            source={require('../../assests/images/screen_1.png')}
          />
        </View>

        <UnlockButton
          handlePress={handlePress}
          title={'Upload Screenshot'}
          isShadow={true}
          stylePros={{
            backgroundColor: '#00A676',
            width: hScale(939),
            height: vScale(184),
          }}
        />
      </View>
    </WrapperComponentPink>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    paddingVertical: vScale(193),
    paddingHorizontal: hScale(115),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  subtext: {
    ...gStyle.sText,
    fontSize: hScale(85),
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: hScale(940),
  },
});
