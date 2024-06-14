import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import FlatList = Animated.FlatList;
import {hScale, vScale} from '../../baseSize.ts';
import {PlusIcon} from '../../assests';
import {gStyle} from '../../styles';

type Props = {
  title?: string;
  uri?: string;
};

type ScreenshotsCardProps = {
  screenshots: Props[];
  onDelete: (index: number) => void;
};

export const ScreenshotsCard = ({
  screenshots,
  onDelete,
}: ScreenshotsCardProps) => {
  const renderItem = ({
    item: {uri, title},
    index,
  }: {
    item: Props;
    index: number;
  }) => (
    <View style={styles.card}>
      {uri ? (
        <Image source={{uri: uri}} style={styles.image} />
      ) : (
        <View style={styles.textWrapper}>
          <Text style={styles.textCard}>{title && 'User’s screenshot'}</Text>
        </View>
      )}

      <Pressable style={styles.deleteButton} onPress={() => onDelete(index)}>
        <PlusIcon
          stroke={'#FFFFFF'}
          strokeWidth={2.3}
          style={{transform: [{rotate: '45deg'}]}}
        />
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={screenshots}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  card: {
    marginHorizontal: hScale(40),
    marginBottom: vScale(80),
    width: hScale(272),
    height: vScale(484),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040404',
    borderRadius: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    right: hScale(9.5),
    top: vScale(370.5),
    width: hScale(97.8),
    height: vScale(97.8),
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 18,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  textCard: {
    ...gStyle.sText,
    fontSize: vScale(50),
    fontWeight: '400',
    textAlign: 'center',
  },
});
