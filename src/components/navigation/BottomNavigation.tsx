import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from 'components/layout/BottomTabBar.tsx';
import {Home} from 'screens';
import {useTheme} from 'styled-components';
import {HomeIcon} from 'assets';

const Tap = createBottomTabNavigator();

function BottomNavigation() {
  const {palette} = useTheme();

  return (
    <Tap.Navigator
      tabBar={BottomTabBar}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: palette.primary600,
        tabBarActiveTintColor: palette.gray900,
      }}>
      <Tap.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
    </Tap.Navigator>
  );
}

export default BottomNavigation;
