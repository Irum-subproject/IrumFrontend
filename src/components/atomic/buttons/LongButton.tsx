import {Row4} from 'components/atomic/RowColumn.tsx';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Typo} from 'components/atomic/typography';
import styled from 'styled-components/native';
import React from 'react';
interface shortButtonInterface {
  titleColor: string;
  buttonTitle: string;
  buttonColor: string;
  ButtonIcon?: React.ReactElement;
  handler: (e: GestureResponderEvent) => void;
}

function LongButton({
  titleColor,
  buttonTitle,
  buttonColor,
  ButtonIcon,
  handler,
}: shortButtonInterface) {
  return (
    <TouchableOpacity onPress={e => handler(e)}>
      <ButtonContainer buttonColor={buttonColor}>
        <Row4 alignItems={'center'}>
          <Typo.Caption.Semi color={titleColor}>
            {buttonTitle}
          </Typo.Caption.Semi>
          {ButtonIcon && ButtonIcon}
        </Row4>
      </ButtonContainer>
    </TouchableOpacity>
  );
}

const ButtonContainer = styled(Row4).attrs<{buttonColor: string}>(props => ({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: [10, 14],
  backgroundColor: props.buttonColor,
}))`
  border-radius: 8px;
`;

export default LongButton;
