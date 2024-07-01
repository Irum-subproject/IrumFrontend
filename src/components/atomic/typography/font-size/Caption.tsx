import {
  NormalBase,
  RegularBase,
  SemiBase,
} from 'components/atomic/typography/FontWeightBase.tsx';
import styled from 'styled-components/native';

const Semi = styled(SemiBase).attrs(props => ({color: props.color}))`
  font-size: ${props => props.theme.typo.caption.size}px;
  letter-spacing: ${props => props.theme.typo.caption.letterSpacing}px;
  line-height: ${props => props.theme.typo.caption.lineHeight}px;
`;
const Normal = styled(NormalBase).attrs(props => ({color: props.color}))`
  font-size: ${props => props.theme.typo.caption.size}px;
  letter-spacing: ${props => props.theme.typo.caption.letterSpacing}px;
  line-height: ${props => props.theme.typo.caption.lineHeight}px;
`;
const Regular = styled(RegularBase).attrs(props => ({color: props.color}))`
  font-size: ${props => props.theme.typo.caption.size}px;
  letter-spacing: ${props => props.theme.typo.caption.letterSpacing}px;
  line-height: ${props => props.theme.typo.caption.lineHeight}px;
`;

export const Caption = {
  Semi,
  Normal,
  Regular,
};
