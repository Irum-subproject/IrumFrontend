import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {GestureResponderEvent} from 'react-native';

function BottomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const labelContent = options.tabBarLabel as string;
        const Icon = options.tabBarIcon as (props: {
          color: string;
        }) => React.JSX.Element;
        const color = isFocused
          ? (options.tabBarActiveTintColor as string)
          : (options.tabBarInactiveTintColor as string);

        const navigateTo = (event: GestureResponderEvent) => {
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabContainer key={index} onPress={event => navigateTo(event)}>
            {color && <Icon color={color} />}
            {color && <Label color={color}>{labelContent}</Label>}
          </TabContainer>
        );
      })}
    </Container>
  );
}

const Label = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-size: ${props => props.theme.typo.caption}px;
  font-weight: ${props => props.theme.typo.normal};
`;
const TabContainer = styled.Pressable`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding: 8px 20px;
  border-top: 1px solid ${props => props.theme.palette.gray100};
  border-radius: 8px 8px 0 0;
  background-color: ${props => props.theme.palette.gray50};
`;

export default BottomTabBar;
