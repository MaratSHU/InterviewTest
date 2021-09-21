import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {EventDataType} from '../types';

interface IProps {
  item: EventDataType;
  onPress: () => void;
}

export const EventCardItem = ({item, onPress}: IProps) => {
  const {actor, payload, repo, created_at, type, id} = item;
  // console.log(item);
  return (
    <Pressable style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.idStyle}>{id}</Text>
      <View style={styles.headerContainer}>
        {actor?.avatar_url ? (
          <FastImage
            source={{uri: actor.avatar_url}}
            style={styles.avatarStyle}
            resizeMode={FastImage.resizeMode.cover}
          />
        ) : null}
        {actor?.login ? (
          <Text style={styles.actorLogin}>{actor.login}</Text>
        ) : null}
        <Text style={styles.dateText}>{created_at}</Text>
      </View>
      {repo?.name ? (
        <View style={styles.repoTopContainer}>
          <Text numberOfLines={1} style={styles.headText}>
            {repo.name}
          </Text>
        </View>
      ) : null}
      {payload?.action ? (
        <Text numberOfLines={1} style={styles.headText}>
          {payload.action}
        </Text>
      ) : null}
      <View style={styles.payloadsTopContainer}>
        <Text style={styles.actorLogin}>{type}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  idStyle: {
    color: 'red',
    fontWeight: 'bold',
  },
  dateText: {
    color: 'green',
  },
  repoTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  actorLogin: {
    flex: 1,
  },
  headText: {
    flex: 1,
  },
  commentsCount: {
    textAlign: 'right',
  },
  payloadsTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  avatarStyle: {
    width: 30,
    aspectRatio: 1,
    backgroundColor: 'gray',
    marginRight: 10,
  },
});
