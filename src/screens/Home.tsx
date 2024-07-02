import React, {Fragment} from 'react';
import {DoOrDidItem, ScreenLayout} from 'components/layout';
import {
  Col20,
  Col24,
  Col4,
  Col8,
  Row0,
  Row12,
  Row4,
} from 'components/atomic/RowColumn.tsx';
import {Typo} from 'components/atomic/typography';
import styled from 'styled-components/native';
import {ShortButton} from 'components/atomic/buttons';
import Divider from 'components/atomic/Divider.tsx';
import IconButton from 'components/atomic/buttons/IconButton.tsx';
import {ArrowIcon} from 'assets';

const MyDoListInfo = [
  {
    title: '수학 공부',
    leftTime: '00:30',
    leftTimeColor: 'warnRed',
  },
  {
    title: '운동하기',
    leftTime: '00:40',
    leftTimeColor: 'warnYellow',
  },
  {
    title: '6전에 일어나기',
    leftTime: '01:00',
    leftTimeColor: 'gray400',
  },
];
const OtherDidListInfo = [
  {
    title: '시간 추가 - 김민지',
    leftTime: '00:30 까지',
    buttonType: 'about',
  },
  {
    title: '책 읽기 - 이주영',
    leftTime: '11:19 ~ 12:19',
    buttonType: 'check',
  },
  {
    title: '운동하기 - 조성훈',
    leftTime: '10:20 ~ 11:40',
    buttonType: 'check',
  },
];
const ContractInfo = [
  {
    contractName: '나는야 퉁퉁이',
    contractMember: '김민지',
    minimumContractPeriod: '2024.06.22',
  },
  {
    contractName: 'Chain',
    contractMember: '이주영, 조성훈 외 3인',
    minimumContractPeriod: '2024.07.02',
  },
];

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
                  <ArrowIcon rotate={180} color={'gray300'} />
                </IconButton>
              </Row0>
              <Col20>
                {MyDoListInfo.map((v, i) => (
                  <DoOrDidItem
                    key={i}
                    Icon={<TempIcon />}
                    Title={<Typo.Content.Normal>{v.title}</Typo.Content.Normal>}
                    SubTitle={
                      <Row4>
                        <Typo.Caption.Regular color={v.leftTimeColor}>
                          {v.leftTime}
                        </Typo.Caption.Regular>
                        <Typo.Caption.Regular color={'gray400'}>
                          남음
                        </Typo.Caption.Regular>
                      </Row4>
                    }
                    Button={
                      <ShortButton
                        buttonColor={'gray100'}
                        buttonTitle={'시작'}
                        titleColor={'gray500'}
                        handler={() => {}}
                      />
                    }
                  />
                ))}
              </Col20>
            </Col24>
          </BoxContainer>
          {/*manage section*/}
          <BoxContainer>
            <Col24 width={'100%'}>
              <Row0>
                <Typo.Body.Semi color={'gray700'}>관리</Typo.Body.Semi>
                <IconButton handler={() => {}}>
                  <ArrowIcon rotate={180} color={'gray300'} />
                </IconButton>
              </Row0>
              <Col20>
                {OtherDidListInfo.map((v, i) => (
                  <DoOrDidItem
                    key={i}
                    Icon={<TempIcon />}
                    Title={<Typo.Content.Normal>{v.title}</Typo.Content.Normal>}
                    SubTitle={
                      <Row4>
                        <Typo.Caption.Regular color={'gray400'}>
                          {v.leftTime}
                        </Typo.Caption.Regular>
                      </Row4>
                    }
                    Button={
                      v.buttonType === 'check' ? (
                        <ShortButton
                          buttonColor={'gray100'}
                          buttonTitle={'확인'}
                          titleColor={'gray500'}
                          handler={() => {}}
                        />
                      ) : (
                        <ShortButton
                          buttonColor={'primary600'}
                          buttonTitle={'상세'}
                          titleColor={'gray50'}
                          handler={() => {}}
                        />
                      )
                    }
                  />
                ))}
              </Col20>
            </Col24>
          </BoxContainer>
          {/*contract section*/}
          <BoxContainer>
            <Col24 width={'100%'}>
              <Row0>
                <Typo.Body.Semi color={'gray700'}>관리</Typo.Body.Semi>
                <IconButton handler={() => {}}>
                  <Row4 alignItems={'center'}>
                    <Typo.Content.Normal color={'gray300'}>
                      더보기
                    </Typo.Content.Normal>
                    <ArrowIcon rotate={270} color={'gray300'} />
                  </Row4>
                </IconButton>
              </Row0>
              <Col20>
                {ContractInfo.map((v, i) => (
                  <DoOrDidItem
                    key={i}
                    Icon={<TempIcon />}
                    Title={
                      <Row4>
                        <Typo.Content.Normal>
                          {v.contractName}
                        </Typo.Content.Normal>
                        <Typo.Content.Normal>-</Typo.Content.Normal>
                        <Typo.Content.Normal>
                          {v.contractMember}
                        </Typo.Content.Normal>
                      </Row4>
                    }
                    SubTitle={
                      <Row4>
                        <Typo.Caption.Regular color={'gray400'}>
                          최소 기간
                        </Typo.Caption.Regular>
                        <Typo.Caption.Regular color={'gray400'}>
                          {v.minimumContractPeriod}
                        </Typo.Caption.Regular>
                      </Row4>
                    }
                    Button={
                      <IconButton handler={() => {}}>
                        <ArrowIcon rotate={180} color={'gray300'} />
                      </IconButton>
                    }
                  />
                ))}
                <Divider />
                <DoOrDidItem
                  Title={<Typo.Content.Normal>계약 추가</Typo.Content.Normal>}
                  Icon={<TempIcon />}
                  Button={
                    <IconButton handler={() => {}}>
                      <ArrowIcon rotate={180} color={'gray300'} />
                    </IconButton>
                  }
                />
              </Col20>
            </Col24>
          </BoxContainer>
        </Col20>
      </Fragment>
    </ScreenLayout>
  );
}

const TempIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${props => props.theme.palette.primary800};
`;
const BoxContainer = styled(Col20).attrs({
  flex: 1,
  padding: [20],
  backgroundColor: 'gray50',
})`
  border-radius: 16px;
`;

export default Home;
