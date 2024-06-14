import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {hScale, vScale} from '../../baseSize.ts';

type Props = {
  width: number;
  height: number;
  imageSource: ImageSourcePropType;
};

export const DynamicImage = ({width, height, imageSource}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {width: hScale(width), height: vScale(height)},
      ]}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040404',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
