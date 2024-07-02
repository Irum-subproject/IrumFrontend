import React from 'react';
import {Col4, Row0, Row12, Row8} from 'components/atomic/RowColumn.tsx';

interface DoOrDidItemProps {
  Icon: React.ReactNode;
  Title: React.ReactNode;
  SubTitle?: React.ReactNode;
  Button?: React.ReactNode;
  ButtonDescription?: React.ReactNode;
}

function DoOrDidItem({
  Icon,
  Title,
  SubTitle,
  Button,
  ButtonDescription,
}: DoOrDidItemProps) {
  return (
    <Row0>
      <Row12 alignItems={'center'}>
        {Icon}
        <Col4>
          {Title}
          {SubTitle}
        </Col4>
      </Row12>
      <Row8 alignItems={'center'}>
        {ButtonDescription && ButtonDescription}
        {Button}
      </Row8>
    </Row0>
  );
}

export default DoOrDidItem;
