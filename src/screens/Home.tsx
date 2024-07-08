import React, {Fragment} from 'react';
import {TaskItemLayout, ScreenLayout, TaskBoxLayout} from 'components/layout';
import {Col20, Col4, Row12, Row4} from 'components/atomic/RowColumn.tsx';
import {Typo} from 'components/atomic/typography';
import styled from 'styled-components/native';
import {ShortButton} from 'components/atomic/buttons';
import Divider from 'components/atomic/Divider.tsx';
import IconButton from 'components/atomic/buttons/IconButton.tsx';
import {ArrowIcon} from 'assets';
import {Timer} from 'components/atomic';

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

const PayAndPaidSection = () => (
  <Row12 width={'100%'} justifyContent={'space-between'}>
    <BoxContainer justifyContent={'center'} alignItems={'center'}>
      <Col4>
        <Typo.SubBody.Normal color={'gray400'}>입금</Typo.SubBody.Normal>
        <Typo.Headline.Semi color={'primary600'}>+10000</Typo.Headline.Semi>
      </Col4>
    </BoxContainer>
    <BoxContainer justifyContent={'center'} alignItems={'center'}>
      <Col4>
        <Typo.SubBody.Normal color={'gray400'}>출금</Typo.SubBody.Normal>
        <Typo.Headline.Semi color={'warnRed'}>+10000</Typo.Headline.Semi>
      </Col4>
    </BoxContainer>
  </Row12>
);

const TimerSection = () => (
  <BoxContainer>
    <Timer defaultTime={'00 : 31 : 54'} timerTitle={'수학 공부'} />
    <Divider />
    <Timer defaultTime={'- 00 : 02 : 17'} timerTitle={'운동하기'} />
  </BoxContainer>
);

const ListSection = () => (
  <BoxContainer>
    <TaskBoxLayout
      titleSection={{
        left: '목록',
        right: [
          <IconButton handler={() => {}}>
            <ArrowIcon rotate={180} color={'gray300'} />
          </IconButton>,
        ],
      }}>
      {MyDoListInfo.map((v, i) => (
        <TaskItemLayout
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
    </TaskBoxLayout>
  </BoxContainer>
);

const ManageSection = () => (
  <BoxContainer>
    <TaskBoxLayout
      titleSection={{
        left: '관리',
        right: [
          <IconButton handler={() => {}}>
            <ArrowIcon rotate={180} color={'gray300'} />
          </IconButton>,
        ],
      }}>
      {OtherDidListInfo.map((v, i) => (
        <TaskItemLayout
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
    </TaskBoxLayout>
  </BoxContainer>
);

const ContractSection = () => (
  <BoxContainer>
    <TaskBoxLayout
      titleSection={{
        left: '계약',
        right: [
          <IconButton handler={() => {}}>
            <Row4 alignItems={'center'}>
              <Typo.Content.Normal color={'gray300'}>
                더보기
              </Typo.Content.Normal>
              <ArrowIcon rotate={270} color={'gray300'} />
            </Row4>
          </IconButton>,
        ],
      }}>
      {ContractInfo.map((v, i) => (
        <TaskItemLayout
          key={i}
          Icon={<TempIcon />}
          Title={
            <Row4>
              <Typo.Content.Normal>{v.contractName}</Typo.Content.Normal>
              <Typo.Content.Normal>-</Typo.Content.Normal>
              <Typo.Content.Normal>{v.contractMember}</Typo.Content.Normal>
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
    </TaskBoxLayout>
    <Divider />
    <TaskItemLayout
      Title={<Typo.Content.Normal>계약 추가</Typo.Content.Normal>}
      Icon={<TempIcon />}
      Button={
        <IconButton handler={() => {}}>
          <ArrowIcon rotate={180} color={'gray300'} />
        </IconButton>
      }
    />
  </BoxContainer>
);

function Home(): React.JSX.Element {
  return (
    <ScreenLayout
      headerOption={{isLogo: true, isBell: true}}
      backgroundColor={'gray100'}>
      <Fragment>
        <Col20 width={'100%'} padding={[20]}>
          <PayAndPaidSection />
          <TimerSection />
          <ListSection />
          <ManageSection />
          <ContractSection />
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
