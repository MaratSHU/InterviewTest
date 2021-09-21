import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useRef} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {StackParamsList} from '../../../App';
import {useAppDispatch, useAppSelector} from '../../common/hooks/storeHooks';
import {EmptyListPlaceholder} from './components/EmptyListPlaceholder';
import {EventCardItem} from './components/EventCardItem';
import {updateEventsList} from './homeScreenThunks';
import {LoadState} from '../../common/types/LoadingState';
import {useIsFocused} from '@react-navigation/native';

type NavProps = NativeStackScreenProps<StackParamsList, 'Home'>;

interface IProps extends NavProps {}

export const HomeScreen = ({navigation}: IProps) => {
  const eventsList = useAppSelector(store => store.homeScreen.eventsList);
  const dispatch = useAppDispatch();
  const lastUpdate = useRef(new Date());
  const timerRef = useRef(null);
  const isFocused: boolean = useIsFocused();

  const resetTimer = useCallback(
    startNew => {
      lastUpdate.current = new Date();
      clearTimeout(timerRef.current);
      if (startNew) {
        timerRef.current = setTimeout(() => {
          dispatch(updateEventsList({add: false}));
          resetTimer(true);
        }, 60000);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFocused) {
      dispatch(updateEventsList({add: false}));
      resetTimer(true);
    } else {
      resetTimer(false);
    }
  }, [isFocused, dispatch, resetTimer]);

  const onPressEvent = useCallback(
    item => {
      navigation.navigate('EventScreen', {data: item});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => (
      <EventCardItem item={item} onPress={onPressEvent.bind(this, item)} />
    ),
    [onPressEvent],
  );

  const emptyContainer = useCallback(() => {
    return <EmptyListPlaceholder loadState={eventsList.loadState} />;
  }, [eventsList.loadState]);

  const separator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  const onEndReached = () => {
    dispatch(updateEventsList({add: true}));
    resetTimer(true);
  };

  const onRefresh = useCallback(() => {
    const currentTime = new Date().getTime();
    if (currentTime - lastUpdate.current.getTime() > 15000) {
      dispatch(updateEventsList({}));
      resetTimer(true);
    }
  }, [dispatch, resetTimer]);

  return (
    <View style={styles.container}>
      <FlatList
        data={eventsList.content}
        bounces={false}
        scrollIndicatorInsets={{right: 1}}
        contentContainerStyle={styles.FLStyle}
        renderItem={renderItem}
        ListEmptyComponent={emptyContainer}
        ItemSeparatorComponent={separator}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        refreshControl={
          <RefreshControl
            refreshing={eventsList.loadState === LoadState.refreshing}
            onRefresh={onRefresh}
          />
        }

        // onRefresh={onRefresh}
        //
        // refreshing={eventsList.loadState === LoadState.pullToRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  FLStyle: {
    flexGrow: 1,
  },
});
