import ScreenLayout from 'components/layout/ScreenLayout.tsx';
import {Fragment} from 'react';
import {Text} from 'react-native';

function Chatting() {
  return (
    <ScreenLayout headerOption={{title: {isTitle: true, contents: '채팅'}}}>
      <Fragment>
        <Text>Chating</Text>
      </Fragment>
    </ScreenLayout>
  );
}

export default Chatting;
