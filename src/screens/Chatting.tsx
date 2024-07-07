import {ScreenLayout} from 'components/layout';
import {Col20, Row12} from 'components/atomic/RowColumn.tsx';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {SearchIcon} from 'assets';
import {Typo} from 'components/atomic/typography';

function SearchBar() {
  return (
    <TouchableOpacity>
      <SearchBarContainer>
        <SearchIcon />
        <Typo.Content.Normal color={'gray400'}>검색</Typo.Content.Normal>
      </SearchBarContainer>
    </TouchableOpacity>
  );
}

const SearchBarContainer = styled(Row12).attrs({
  backgroundColor: 'gray100',
  padding: [12, 16],
  width: '100%',
})`
  height: 100%;
  border-radius: 100px;
`;

function Chatting() {
  return (
    <ScreenLayout
      headerOption={{title: {isTitle: true, contents: '채팅'}}}
      backgroundColor={'gray50'}>
      <Col20 padding={[20]} width={'100%'}>
        <SearchBar />
      </Col20>
    </ScreenLayout>
  );
}

export default Chatting;
