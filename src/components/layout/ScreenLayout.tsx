import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Logo, ArrowIcon, Bell} from 'assets';
import {useNavigation} from '@react-navigation/native';
import {Row20} from 'components/atomic/RowColumn.tsx';
import {Typo} from 'components/atomic/typography';
import {IconButton} from 'components/atomic/buttons';
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
  font-family: 'Pretendard Variable', sans-serif;
  font-size: ${props => props.theme.typo.subBody.size}px;
  letter-spacing: ${props => props.theme.typo.subBody.letterSpacing}px;
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
          <IconButton
            handler={() => {
              navigation.goBack();
            }}>
            <ArrowIcon />
          </IconButton>
        )}
        {isSearch && <HeaderSearch />}
        {title?.isTitle && (
          <Typo.SubBody.Normal color={'gray600'}>
            {title.contents}
          </Typo.SubBody.Normal>
        )}
      </Row20>
      {isBell && <Bell />}
    </Container>
  );
}

const Container = styled.View<{isCenter: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isCenter ? 'center' : 'space-between')};
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 0 20px;
  background-color: ${props => props.theme.palette.gray50};
  border-color: ${props => props.theme.palette.gray100};
  border-bottom-width: 1px;
`;

function ScreenLayout({
  children,
  headerOption,
  backgroundColor,
}: {
  children: React.ReactNode;
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
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.palette[props.backgroundColor]
      : props.theme.palette.gray100};
  margin-bottom: 48px;
`;

export default ScreenLayout;
