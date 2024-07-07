import React, {Fragment, useState} from 'react';
import {TaskItemLayout, ScreenLayout, TaskBoxLayout} from 'components/layout';
import {Col10, Col20, Col8, Row0, Row4} from 'components/atomic/RowColumn.tsx';
import styled from 'styled-components/native';
import {Typo} from 'components/atomic/typography';
import {LongButton, ShortButton} from 'components/atomic/buttons';
import Divider from 'components/atomic/Divider.tsx';
import ArrowIcon from 'assets/icon/arrow/ArrowIcon.tsx';

const taskPeriod = [
  {
    period: '오늘',
    periodColor: 'warnRed',
  },
  {
    period: '이번 주',
    periodColor: 'warnYellow',
  },
  {
    period: '이번 달',
    periodColor: 'primary600',
  },
];

function DoTask({index}: {index: number}) {
  return (
    <Fragment>
      <TaskBoxLayout
        titleSection={{
          left: taskPeriod[index].period,
          right: [
            <Typo.Caption.Regular color={taskPeriod[index].periodColor}>
              01시 37분
            </Typo.Caption.Regular>,
            <Typo.Caption.Regular color={'gray400'}>남음</Typo.Caption.Regular>,
          ],
        }}>
        <Col20>
          <TaskItemLayout
            Icon={<TempIcon />}
            Title={<Typo.Content.Normal>수학 공부</Typo.Content.Normal>}
            SubTitle={
              <Typo.Caption.Regular color={'gray400'}>
                1시간 동안
              </Typo.Caption.Regular>
            }
            Button={
              <ShortButton
                buttonColor={'warnRed'}
                buttonTitle={'중단'}
                titleColor={'gray50'}
                handler={() => {}}
              />
            }
            ButtonDescription={
              <Row4>
                <Typo.Caption.Normal color={'gray400'}>
                  00:31:54
                </Typo.Caption.Normal>
                <Typo.Caption.Normal color={'gray400'}>
                  남음
                </Typo.Caption.Normal>
              </Row4>
            }
          />
          <TaskItemLayout
            Icon={<TempIcon />}
            Title={<Typo.Content.Normal>운동하기</Typo.Content.Normal>}
            SubTitle={
              <Typo.Caption.Regular color={'gray400'}>
                40분 동안
              </Typo.Caption.Regular>
            }
            Button={
              <ShortButton
                buttonColor={'primary600'}
                buttonTitle={'인증'}
                titleColor={'gray50'}
                handler={() => {}}
              />
            }
            ButtonDescription={
              <Row4>
                <Typo.Caption.Normal color={'gray400'}>
                  완료됨
                </Typo.Caption.Normal>
              </Row4>
            }
          />
          <TaskItemLayout
            Icon={<TempIcon />}
            Title={<Typo.Content.Normal>6시 전에 일어나기</Typo.Content.Normal>}
            SubTitle={
              <Typo.Caption.Regular color={'gray400'}>
                시간 제한 없음
              </Typo.Caption.Regular>
            }
            Button={
              <ShortButton
                buttonColor={'gray100'}
                buttonTitle={'시작'}
                titleColor={'gray500'}
                handler={() => {}}
              />
            }
            ButtonDescription={
              <Row4>
                <Typo.Caption.Normal color={'gray400'}>
                  00:31:54
                </Typo.Caption.Normal>
                <Typo.Caption.Normal color={'gray400'}>
                  남음
                </Typo.Caption.Normal>
              </Row4>
            }
          />
        </Col20>
      </TaskBoxLayout>
      <Divider />
    </Fragment>
  );
}

function MyDoList() {
  const DoneInfo = [
    {
      taskName: '수학 공부',
      taskTime: '1시간 동안',
    },
    {
      taskName: '운동 하기',
      taskTime: '40분 동안',
    },
    {
      taskName: '6시 전에 일어나기',
      taskTime: '시간 제한 없음',
    },
  ];
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <ScreenLayout
      headerOption={{title: {isTitle: true, contents: '할 일 목록'}}}>
      <Fragment>
        <Col10>
          <Section>
            <Col8>
              <Typo.Body.Semi color={'gray400'}>수학 공부</Typo.Body.Semi>
              <Row0>
                <Typo.Title.Semi>00 : 31 : 54</Typo.Title.Semi>
                <ShortButton
                  buttonTitle={'중단하기'}
                  buttonColor={'warnRed'}
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
                  00 : 31 : 54
                </Typo.Title.Semi>
                <ShortButton
                  buttonTitle={'인증하기'}
                  buttonColor={'primary600'}
                  titleColor={'gray50'}
                  handler={() => {}}
                />
              </Row0>
            </Col8>
          </Section>
          <Section>
            <DoTask index={0} />
            {isShowMore && <DoTask index={1} />}
            {isShowMore && <DoTask index={2} />}
            <TaskBoxLayout titleSection={{left: '완료됨'}}>
              {DoneInfo.map((v, i) => (
                <TaskItemLayout
                  key={i}
                  Icon={<TempIcon />}
                  Title={
                    <Typo.Content.Normal color={'gray400'} disabled>
                      {v.taskName}
                    </Typo.Content.Normal>
                  }
                  SubTitle={
                    <Typo.Caption.Regular color={'gray300'}>
                      {v.taskTime}
                    </Typo.Caption.Regular>
                  }
                />
              ))}
            </TaskBoxLayout>
            <Divider />
            {!isShowMore && (
              <LongButton
                handler={() => {
                  setIsShowMore(true);
                }}
                buttonColor={'gray100'}
                buttonTitle={'더보기'}
                titleColor={'gray500'}
                ButtonIcon={
                  <ArrowIcon rotate={270} color={'gray500'} size={12} />
                }
              />
            )}
          </Section>
        </Col10>
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
const Section = styled(Col20).attrs({
  width: '100%',
  padding: [20],
  backgroundColor: 'gray50',
})``;

export default MyDoList;
