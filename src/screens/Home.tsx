import React, {Fragment} from 'react';
import ScreenLayout from 'components/layout/ScreenLayout.tsx';
import {Col20, Col4, Col8, Row0, Row12} from 'components/atomic/RowColumn.tsx';
import {Typo} from 'components/atomic/typography';
import styled from 'styled-components/native';
import ShortButton from 'components/atomic/buttons/ShortButton.tsx';

function Home(): React.JSX.Element {
  return (
    <ScreenLayout
      headerOption={{isLogo: true, isBell: true}}
      backgroundColor={'gray100'}>
      <Fragment>
        <Col20 width={'100%'} padding={[20]}>
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
          <BoxContainer>
            <Col8>
              <Typo.Body.Semi color={'gray400'}>수학 공부</Typo.Body.Semi>
              <Row0
                width={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
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
