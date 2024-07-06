import React, {useState} from 'react';
import {Col8, Row0} from 'components/atomic/RowColumn.tsx';
import styled from 'styled-components/native';
import {Typo} from 'components/atomic/typography';
import {ShortButton} from 'components/atomic/buttons';

interface TimerPropsInterface {
  timerTitle: string;
  defaultTime: string;
  // 기능 구현할 때 handler 추가해서 하면 됨 ㅇㅇ
}

function Timer({timerTitle, defaultTime}: TimerPropsInterface) {
  const [isOver] = useState(defaultTime.indexOf('-') !== -1);
  const [timerTime] = useState(defaultTime);

  return (
    <TimerAndTitle>
      <Title>{timerTitle}</Title>
      <TimerContainer>
        <TimerText color={isOver ? 'primary700' : undefined}>
          {timerTime}
        </TimerText>
        <ShortButton
          buttonColor={isOver ? 'primary600' : 'warnRed'}
          buttonTitle={isOver ? '인증하기' : '중단하기'}
          titleColor={'gray50'}
          handler={() => {}}
        />
      </TimerContainer>
    </TimerAndTitle>
  );
}

const TimerText = styled(Typo.Title.Semi)``;
const TimerContainer = styled(Row0)``;

const Title = styled(Typo.Body.Semi).attrs({color: 'gray400'})``;

const TimerAndTitle = styled(Col8).attrs({width: '100%'})``;

export default Timer;
