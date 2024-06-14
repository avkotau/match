import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {hScale, vScale} from '../../baseSize.ts';

type Props = {
  angle: number;
  source: ImageSourcePropType;
  isCenter?: boolean;
};

export const Card = ({angle, source, isCenter}: Props) => {
  return (
    <View
      style={[
        styles.card,
        {transform: [{rotate: `${angle}deg`}]},
        isCenter && styles.centerCard,
      ]}>
      <Image source={source} style={styles.cardImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginHorizontal: -115,
  },
  centerCard: {
    marginTop: -26,
  },
  cardImage: {
    width: hScale(348),
    height: vScale(750),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    resizeMode: 'cover',
  },
});
