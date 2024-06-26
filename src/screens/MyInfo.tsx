import ScreenLayout from 'components/layout/ScreenLayout.tsx';
import {Fragment} from 'react';
import {Text} from 'react-native';

function MyInfo() {
  return (
    <ScreenLayout headerOption={{title: {isTitle: true, contents: '내 정보'}}}>
      <Fragment>
        <Text>MyInfo</Text>
      </Fragment>
    </ScreenLayout>
  );
}

export default MyInfo;
