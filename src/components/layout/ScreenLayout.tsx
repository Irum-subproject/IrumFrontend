import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Logo, BackArrow, Bell} from 'assets';
import {useNavigation} from '@react-navigation/native';
import {Row20} from 'components/atomic/RowColumn.tsx';
interface headerInterface {
  isLogo?: boolean;
  title?: {
    isTitle: boolean;
    contents: string;
  };
  isBell?: boolean;
  isBackArrow?: boolean;
  isSearch?: boolean;
}

function HeaderSearch() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <HeaderSearchInput
      placeholder={'검색'}
      onChangeText={setSearchText}
      value={searchText}
    />
  );
}
const HeaderSearchInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.palette.gray400,
}))`
  padding: 0;
  color: ${props => props.theme.palette.gray600};
  font-size: ${props => `${props.theme.typo.subBody}px`};
  font-weight: ${props => props.theme.typo.normal};
`;

function Header({
  isLogo,
  title,
  isBell,
  isBackArrow,
  isSearch,
}: headerInterface) {
  const navigation = useNavigation();

  return (
    <Container isCenter={!isLogo && !isBackArrow && !isSearch && !isBell}>
      <Row20 alignItems="center">
        {isLogo && <Logo />}
        {isBackArrow && (
          <BackArrow
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        {isSearch && <HeaderSearch />}
        {title?.isTitle && <HeaderTitle>{title.contents}</HeaderTitle>}
      </Row20>
      {isBell && <Bell />}
    </Container>
  );
}

const HeaderTitle = styled.Text`
  color: ${props => props.theme.palette.gray600};
  font-size: ${props => `${props.theme.typo.subBody}px`};
  font-weight: ${props => props.theme.typo.normal};
`;
const Container = styled.View<{isCenter: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isCenter ? 'center' : 'space-between')};
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 0 20px;
  background-color: ${props => props.theme.palette.gray50};
  border-bottom: 1px solid ${props => props.theme.palette.gray100};
`;

function ScreenLayout({
  children,
  headerOption,
  backgroundColor,
}: {
  children: React.JSX.Element;
  headerOption?: headerInterface;
  backgroundColor?: string;
}) {
  return (
    <SafeAreaView>
      <Header
        isLogo={headerOption?.isLogo}
        title={headerOption?.title}
        isBell={headerOption?.isBell}
        isBackArrow={headerOption?.isBackArrow}
        isSearch={headerOption?.isSearch}
      />
      <Screen backgroundColor={backgroundColor}>{children}</Screen>
    </SafeAreaView>
  );
}

const Screen = styled.ScrollView<{backgroundColor?: string}>`
  padding: 0 20px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : props.theme.palette.gray50};
`;

export default ScreenLayout;
