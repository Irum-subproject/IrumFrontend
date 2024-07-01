import {Row4} from 'components/atomic/RowColumn.tsx';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Typo} from 'components/atomic/typography';
import styled from 'styled-components/native';
interface shortButtonInterface {
  titleColor: string;
  buttonTitle: string;
  buttonColor: string;
  handler: (e: GestureResponderEvent) => void;
}

function ShortButton({
  titleColor,
  buttonTitle,
  buttonColor,
  handler,
}: shortButtonInterface) {
  return (
    <TouchableOpacity onPress={e => handler(e)}>
      <ButtonContainer buttonColor={buttonColor}>
        <Typo.Caption.Semi color={titleColor}>{buttonTitle}</Typo.Caption.Semi>
      </ButtonContainer>
    </TouchableOpacity>
  );
}

const ButtonContainer = styled(Row4).attrs<{buttonColor: string}>(props => ({
  alignItems: 'center',
  padding: [10, 14],
  backgroundColor: props.buttonColor,
}))`
  border-radius: 8px;
`;

export default ShortButton;
