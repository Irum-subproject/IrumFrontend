import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from 'components/layout';
import {Chatting, Home, MyDoList, MyInfo, OtherDidList} from 'screens';
import {
  ChattingIcon,
  HomeIcon,
  MyDoListIcon,
  MyInfoIcon,
  OtherDidListIcon,
} from 'assets';

const Tap = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tap.Navigator
      tabBar={BottomTabBar}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'primary600',
        tabBarInactiveTintColor: 'gray900',
      }}>
      <Tap.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tap.Screen
        name={'MyDoList'}
        component={MyDoList}
        options={{
          tabBarLabel: '목록',
          tabBarIcon: MyDoListIcon,
        }}
      />
      <Tap.Screen
        name={'OtherDidList'}
        component={OtherDidList}
        options={{
          tabBarLabel: '관리',
          tabBarIcon: OtherDidListIcon,
        }}
      />
      <Tap.Screen
        name={'Chatting'}
        component={Chatting}
        options={{
          tabBarLabel: '채팅',
          tabBarIcon: ChattingIcon,
        }}
      />
      <Tap.Screen
        name={'MyInfo'}
        component={MyInfo}
        options={{
          tabBarLabel: '내 정보',
          tabBarIcon: MyInfoIcon,
        }}
      />
    </Tap.Navigator>
  );
}

export default BottomNavigation;
