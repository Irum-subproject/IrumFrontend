import styled from 'styled-components/native';
import {Col20, Col24, Row0, Row4} from 'components/atomic/RowColumn.tsx';
import {Typo} from 'components/atomic/typography';
import React, {Fragment} from 'react';

interface TaskBoxLayoutPropsInterface {
  titleSection: {
    left: string;
    right?: Array<React.ReactNode>;
  };
  children: React.ReactNode;
}

function TaskBoxLayout({titleSection, children}: TaskBoxLayoutPropsInterface) {
  return (
    <Container>
      <TitleSection>
        <Title>{titleSection.left}</Title>
        <TitleRightContainer>
          {Array.isArray(titleSection.right) &&
            titleSection.right.map((v, i) => <Fragment key={i}>{v}</Fragment>)}
        </TitleRightContainer>
      </TitleSection>
      <TaskItemContainer>{children}</TaskItemContainer>
    </Container>
  );
}

const TaskItemContainer = styled(Col20).attrs({width: '100%'})``;

const TitleRightContainer = styled(Row4).attrs({alignItems: 'center'})``;
const Title = styled(Typo.Body.Semi)``;
const TitleSection = styled(Row0)``;

const Container = styled(Col24).attrs({
  width: '100%',
})``;

export default TaskBoxLayout;
