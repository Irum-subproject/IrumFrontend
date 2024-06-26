import React, {Fragment} from 'react';
import ScreenLayout from 'components/layout/ScreenLayout.tsx';
import {Text} from 'react-native';

function MyDoList(): React.JSX.Element {
  return (
    <ScreenLayout headerOption={{title: {isTitle: true, contents: '할 일 목록'}}}>
      <Fragment>
        <Text>MyDoList</Text>
      </Fragment>
    </ScreenLayout>
  );
}

export default MyDoList;
