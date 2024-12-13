import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hScale, vScale} from '../../baseSize.ts';
import {gStyle} from '../../styles';
import {Shadow} from 'react-native-shadow-2';

type Props = {
  title: string;
};

export const WhiteGreenButton = ({title}: Props) => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'android' && (
        <Shadow
          distance={20}
          startColor={'rgba(0,166,118,0.38)'}
          endColor={'#00A67600'}
          paintInside={false}
          style={{
            width: hScale(939),
            height: vScale(184),
            borderRadius: vScale(50),
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
      )}
      <View style={styles.outerContainer}>
        <TouchableOpacity>
          <Shadow
            distance={6}
            startColor={'#FFFFFF'}
            endColor={'#FFFFFF00'}
            offset={[-3, -3]}
            paintInside={true}
            sides={{top: true, start: true, bottom: true, end: true}}
            corners={{
              topStart: true,
              topEnd: true,
              bottomStart: true,
              bottomEnd: true,
            }}
            style={{width: hScale(939), height: vScale(184)}}>
            <Shadow
              distance={6}
              startColor={'#00A676'}
              endColor={'#00A87A00'}
              offset={[5.5, 6]}
              paintInside={true}
              sides={{top: true, start: true, bottom: true, end: true}}
              corners={{
                topStart: true,
                topEnd: true,
                bottomStart: true,
                bottomEnd: true,
              }}>
              <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
              </View>
            </Shadow>
          </Shadow>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    shadowColor: '#00A676',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },

  outerContainer: {
    borderRadius: vScale(50),
    overflow: 'hidden',
    alignItems: 'center',
  },
  button: {
    width: hScale(922),
    height: vScale(165),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: vScale(40),
    paddingTop: vScale(19),
    paddingHorizontal: hScale(57),
  },
  text: {
    ...gStyle.sText,
    fontSize: vScale(67),
    fontWeight: '700',
  },
});
