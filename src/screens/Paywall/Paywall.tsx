import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {hScale, vScale} from '../../baseSize.ts';
import {GoBack, MatchIcon} from '../../assests';

import {PaywallProps} from '../../types';
import {gStyle} from '../../styles';
import {UnlockButton, WrapperUnlockButton} from '../../components';

export const Paywall = ({navigation}: PaywallProps) => {
  const handlePress = () => {
    navigation?.navigate('Home');
  };

  return (
    <View style={s.container}>
      <View style={{width: '100%', height: vScale(100)}}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={{
            height: vScale(149.1),
            width: hScale(79.5),
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <GoBack fill={'#ED217C'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: vScale(939),
          position: 'absolute',
          marginTop: vScale(105),
        }}>
        <MatchIcon fill={'#ed217c'} />
      </View>

      <View style={s.textContainer}>
        <Text style={s.text}>Unlimited Rizz</Text>
        <Text style={s.text}>Coach Recommended</Text>
        <Text style={s.text}>Proven to Get Dates</Text>
        <Text style={s.text}>x10 More Responses</Text>
        <Text style={s.text}>x8 More Dates</Text>
      </View>
      <WrapperUnlockButton>
        <UnlockButton
          title={'Unlock Free Trial'}
          handlePress={handlePress}
          stylePros={{
            backgroundColor: '#00A676',
            width: hScale(771),
            height: vScale(184),
          }}
        />
      </WrapperUnlockButton>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingHorizontal: hScale(119),
    paddingVertical: vScale(197),
  },
  textContainer: {
    marginBottom: vScale(140),
    marginTop: vScale(652),
  },
  text: {
    marginBottom: vScale(44),
    fontSize: vScale(70),
    ...gStyle.sText,
  },
});
