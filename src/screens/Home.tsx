import React, {Fragment} from 'react';
import {Text} from 'react-native';
import ScreenLayout from 'components/layout/ScreenLayout.tsx';

function Home(): React.JSX.Element {
  return (
    <ScreenLayout headerOption={{isLogo: true, isBell: true}}>
      <Fragment>
        <Text>Home</Text>
      </Fragment>
    </ScreenLayout>
  );
}

export default Home;
