import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, MyDoList} from 'screens';
import BottomNavigation from 'components/navigation/BottomNavigation.tsx';

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <BottomNavigation />
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'MyDoList'} component={MyDoList} />
    </Stack.Navigator>
  );
}
export default RootNavigator;
