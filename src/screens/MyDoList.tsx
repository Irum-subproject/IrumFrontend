import React, {Fragment} from 'react';
import ScreenLayout from 'components/layout/ScreenLayout.tsx';
import {Text} from 'react-native';

function MyDoList(): React.JSX.Element {
  return (
    <ScreenLayout headerOption={{title: {isTitle: true, contents: 'false'}}}>
      <Fragment>
        <Text>MyDoList</Text>
      </Fragment>
    </ScreenLayout>
  );
}

export default MyDoList;
