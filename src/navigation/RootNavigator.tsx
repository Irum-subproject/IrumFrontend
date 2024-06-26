import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Chatting, Home, MyDoList, MyInfo, OtherDidList} from 'screens';
import BottomNavigation from 'navigation/BottomNavigation.tsx';

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'tab'} component={BottomNavigation} />
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'MyDoList'} component={MyDoList} />
      <Stack.Screen name={'OtherDidList'} component={OtherDidList} />
      <Stack.Screen name={'Chatting'} component={Chatting} />
      <Stack.Screen name={'MyInfo'} component={MyInfo} />
    </Stack.Navigator>
  );
}
export default RootNavigator;
