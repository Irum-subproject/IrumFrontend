import {ScreenLayout} from 'components/layout';
import {Fragment} from 'react';
import {Col10, Col20, Col24} from 'components/atomic/RowColumn.tsx';
import styled from 'styled-components/native';
import {Typo} from 'components/atomic/typography';
import {DoOrDidItem} from 'components/layout';
import {ShortButton} from 'components/atomic/buttons';
import Divider from 'components/atomic/Divider.tsx';

const sectionInfo = [
  {
    member: 2,
    sectionTitle: '꾸준한 습관 - 김민지',
    impossible: {
      isImpossible: true,
      whoImpossible: ['김민지'],
    },
    addTime: {
      isAddTime: true,
      addTimeData: [
        {
          whoAddTime: '김민지',
          addTimeNumber: '00:10',
        },
        {
          whoAddTime: '김민지',
          addTimeNumber: '00:30',
        },
      ],
    },
    didTaskList: [
      {
        who: '김민지',
        taskTitle: '수학 공부',
        progressTime: '12:00~13:00',
      },
      {
        who: '김민지',
        taskTitle: '운동하기',
        progressTime: '07:40~08:32',
      },
      {
        who: '김민지',
        taskTitle: '6시 전에 일어나기',
        progressTime: '05:47',
      },
    ],
  },
  {
    member: 4,
    sectionTitle: 'chain - 이주영, 조성훈, 이원준, 김모씌, 임호씌',
    impossible: {
      isImpossible: false,
      whoImpossible: [undefined],
    },
    addTime: {
      isAddTime: false,
      addTimeData: [undefined],
    },
    didTaskList: [
      {
        who: '이주영',
        taskTitle: '수학 공부',
        progressTime: '12:00~13:00',
      },
      {
        who: '조성훈',
        taskTitle: '운동하기',
        progressTime: '07:40~08:32',
      },
      {
        who: '이나린',
        taskTitle: '6시 전에 일어나기',
        progressTime: '05:47',
      },
    ],
  },
];

interface addTimeItemInterface {
  addTimeNumber: string;
  whoAddTime: string;
}
interface didTaskItemInterface {
  who: string;
  taskTitle: string;
  progressTime: string;
}
interface SectionInterface {
  member: number;
  sectionTitle: string;
  impossible: {
    isImpossible: boolean;
    whoImpossible: Array<string | undefined>;
  };
  addTime: {
    isAddTime: boolean;
    addTimeData: Array<addTimeItemInterface | undefined>;
  };
  didTaskList: Array<didTaskItemInterface | undefined>;
}

function Section({
  member,
  sectionTitle,
  impossible,
  addTime,
  didTaskList,
}: SectionInterface) {
  return (
    <SectionContainer>
      <Typo.Body.Semi width={'210px'} ellipsis>
        {sectionTitle}
      </Typo.Body.Semi>
      <Col20>
        {impossible.isImpossible &&
          impossible.whoImpossible.map((v, i) => (
            <DoOrDidItem
              key={i}
              Icon={<TempIcon />}
              Title={
                <Typo.Content.Normal>
                  이행 불가 {member > 2 && ` - ${v}`}
                </Typo.Content.Normal>
              }
              Button={
                <ShortButton
                  handler={() => {}}
                  buttonColor={'primary600'}
                  buttonTitle={'상세'}
                  titleColor={'gray50'}
                />
              }
            />
          ))}
        {impossible.isImpossible && <Divider />}
        {addTime.isAddTime &&
          addTime.addTimeData.map((v, i) => (
            <DoOrDidItem
              key={i}
              Icon={<TempIcon />}
              Title={
                <Typo.Content.Normal>
                  시간 추가 {member > 2 && ` - ${v?.whoAddTime}`}
                </Typo.Content.Normal>
              }
              SubTitle={
                <Typo.Caption.Regular color={'gray400'}>
                  {v?.addTimeNumber}
                </Typo.Caption.Regular>
              }
              Button={
                <ShortButton
                  handler={() => {}}
                  buttonColor={
                    impossible.isImpossible ? 'primary300' : 'primary600'
                  }
                  buttonTitle={'상세'}
                  titleColor={'gray50'}
                />
              }
            />
          ))}
        {addTime.isAddTime && <Divider />}
        {didTaskList.map((v, i) => (
          <DoOrDidItem
            key={i}
            Icon={<TempIcon />}
            Title={
              <Typo.Content.Normal>
                {v?.taskTitle} {member > 2 && ` - ${v?.who}`}
              </Typo.Content.Normal>
            }
            SubTitle={
              <Typo.Caption.Regular color={'gray400'}>
                {v?.progressTime}
              </Typo.Caption.Regular>
            }
            Button={
              <ShortButton
                handler={() => {}}
                buttonColor={'gray100'}
                buttonTitle={'확인'}
                titleColor={'gray500'}
              />
            }
          />
        ))}
      </Col20>
    </SectionContainer>
  );
}

const SectionContainer = styled(Col24).attrs({
  width: '100%',
  padding: [20],
  backgroundColor: 'gray50',
})``;

function OtherDidList() {
  return (
    <ScreenLayout
      headerOption={{title: {isTitle: true, contents: '할 일 관리'}}}>
      <Fragment>
        <Col10>
          {sectionInfo.map(
            (v, i) =>
              v.didTaskList !== undefined && (
                <Section
                  key={i}
                  member={v.member}
                  sectionTitle={v.sectionTitle}
                  impossible={v.impossible}
                  addTime={v.addTime}
                  didTaskList={v.didTaskList}
                />
              ),
          )}
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

export default OtherDidList;
