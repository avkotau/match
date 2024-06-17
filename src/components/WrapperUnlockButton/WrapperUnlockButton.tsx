import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {
  isGreaterThan5Point5Inch,
  isGreaterThan5PointFiveInch,
  vScale,
} from '../../baseSize.ts';
import {ReactNode} from 'react';
import {gStyle} from '../../styles';

type Props = {
  children: ReactNode;
};

export const WrapperUnlockButton = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00A676', '#46B1C9']}
        style={styles.title}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.titleText}>Rizz God</Text>
      </LinearGradient>
      <MaskedView
        style={{flex: 1, flexDirection: 'row', paddingBottom: vScale(33.7)}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: isGreaterThan5Point5Inch ? vScale(30) : 0,
            }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: '900',
              }}>
              Elevate Your Game
            </Text>
          </View>
        }>
        <LinearGradient
          colors={['#FFFFFF', '#46B1C9']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{flex: 1}}
        />
      </MaskedView>
      {children}
      <Text style={styles.descriptionText}>
        risk-free trial then $8.67/week
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#00A676',
    borderRadius: 25,
    padding: vScale(59),
    alignItems: 'center',
    justifyContent: 'center',
    height: vScale(637),
    backgroundColor: '#393939',
  },

  title: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderColor: '#707070',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    top: vScale(-56),
  },
  titleText: {
    ...gStyle.sText,
    fontWeight: 'bold',
    fontSize: vScale(45),
  },
  descriptionText: {
    marginTop: vScale(50),
    fontSize: 16,
    paddingBottom: isGreaterThan5PointFiveInch ? vScale(33.7) : 0,
    ...gStyle.sText,
    color: '#FFFFFF',
    fontWeight: '300',
  },
});
