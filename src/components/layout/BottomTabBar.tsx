import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from "styled-components/native";

function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.JSX.Element {
  return (
    <Container>
      {state.routes.map((headerItem, index) => {
        const
      })}
    </Container>
  );
}

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
