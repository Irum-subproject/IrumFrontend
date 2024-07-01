import React, {Fragment} from 'react';
import ScreenLayout from 'components/layout/ScreenLayout.tsx';
import {
  Col20,
  Col24,
  Col4,
  Col8,
  Row0,
  Row12,
} from 'components/atomic/RowColumn.tsx';
import {Typo} from 'components/atomic/typography';
import styled from 'styled-components/native';
import {ShortButton} from 'components/atomic/buttons';
import Divider from 'components/atomic/Divider.tsx';
import IconButton from 'components/atomic/buttons/IconButton.tsx';
import {ArrowIcon} from 'assets';

function Home(): React.JSX.Element {
  return (
    <ScreenLayout
      headerOption={{isLogo: true, isBell: true}}
      backgroundColor={'gray100'}>
      <Fragment>
        <Col20 width={'100%'} padding={[20]}>
          {/*pay and paid section*/}
          <Row12 width={'100%'} justifyContent={'space-between'}>
            <BoxContainer justifyContent={'center'} alignItems={'center'}>
              <Col4>
                <Typo.SubBody.Normal color={'gray400'}>
                  입금
                </Typo.SubBody.Normal>
                <Typo.Headline.Semi color={'primary600'}>
                  +10000
                </Typo.Headline.Semi>
              </Col4>
            </BoxContainer>
            <BoxContainer justifyContent={'center'} alignItems={'center'}>
              <Col4>
                <Typo.SubBody.Normal color={'gray400'}>
                  출금
                </Typo.SubBody.Normal>
                <Typo.Headline.Semi color={'warnRed'}>
                  +10000
                </Typo.Headline.Semi>
              </Col4>
            </BoxContainer>
          </Row12>
          {/*timer section*/}
          <BoxContainer>
            <Col8>
              <Typo.Body.Semi color={'gray400'}>수학 공부</Typo.Body.Semi>
              <Row0>
                <Typo.Title.Semi color={'gray700'}>
                  00 : 31 : 54
                </Typo.Title.Semi>
                <ShortButton
                  buttonColor={'warnRed'}
                  buttonTitle={'중단하기'}
                  titleColor={'gray50'}
                  handler={() => {}}
                />
              </Row0>
            </Col8>
            <Divider />
            <Col8>
              <Typo.Body.Semi color={'gray400'}>운동하기</Typo.Body.Semi>
              <Row0>
                <Typo.Title.Semi color={'primary700'}>
                  -00 : 02 : 17
                </Typo.Title.Semi>
                <ShortButton
                  buttonColor={'primary600'}
                  buttonTitle={'인증하기'}
                  titleColor={'gray50'}
                  handler={() => {}}
                />
              </Row0>
            </Col8>
          </BoxContainer>
          {/*list section*/}
          <BoxContainer>
            <Col24 width={'100%'}>
              <Row0>
                <Typo.Body.Semi color={'gray700'}>목록</Typo.Body.Semi>
                <IconButton handler={() => {}}>
                  <ArrowIcon rotate={180} />
                </IconButton>
              </Row0>
              <Col20>
                <Row0>
                  {/*<DoOrDidItem/>*/}
                </Row0>
              </Col20>
            </Col24>
          </BoxContainer>
        </Col20>
      </Fragment>
    </ScreenLayout>
  );
}

const BoxContainer = styled(Col20).attrs({
  flex: 1,
  padding: [20],
  backgroundColor: 'gray50',
})`
  border-radius: 16px;
`;

export default Home;
