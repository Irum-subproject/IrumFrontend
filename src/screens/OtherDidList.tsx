import {ScreenLayout} from 'components/layout';
import {Fragment} from 'react';
import {Text} from 'react-native';

function OtherDidList() {
  return (
    <ScreenLayout
      headerOption={{title: {isTitle: true, contents: '할 일 관리'}}}>
      <Fragment>
        <Text>OtherDidList</Text>
      </Fragment>
    </ScreenLayout>
  );
}

export default OtherDidList;
