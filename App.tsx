import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/homeScreen/HomeScreen';
import {EventScreen} from './src/screens/eventScreen/EventScreen';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/common/store/store';
import {EventDataType} from './src/screens/homeScreen/types';

export type StackParamsList = {
  Home: undefined;
  EventScreen: {
    data: EventDataType;
  };
};

const Stack = createNativeStackNavigator<StackParamsList>();

function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
