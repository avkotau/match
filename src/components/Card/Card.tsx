import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';

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
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginHorizontal: -22,
  },
  centerCard: {
    marginTop: -26,
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 348 / 750,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    resizeMode: 'contain',
  },
});
