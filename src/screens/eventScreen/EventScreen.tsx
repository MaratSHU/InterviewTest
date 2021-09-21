import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackParamsList} from '../../../App';

type NavProps = NativeStackScreenProps<StackParamsList, 'EventScreen'>;

interface IProps extends NavProps {}

export const EventScreen = ({route}: IProps) => {
  const data = route.params!.data;
  if (!data) {
    return null;
  }
  const keysList = Object.keys(data);
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        scrollIndicatorInsets={{right: 1}}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.SViewStyle}>
        {keysList.map(key => {
          return (
            <Text style={styles.TextStyle} key={key}>
              {key + ':' + JSON.stringify(data[key])}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  SViewStyle: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  TextStyle: {
    fontSize: 18,
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
});
