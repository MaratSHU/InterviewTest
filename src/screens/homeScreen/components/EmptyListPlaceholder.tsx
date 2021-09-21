import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoadState} from '../../../common/types/LoadingState';

interface IProps {
  loadState: LoadState;
}

export const EmptyListPlaceholder = ({loadState}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.isEmptyText}>{loadState}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isEmptyText: {},
});
