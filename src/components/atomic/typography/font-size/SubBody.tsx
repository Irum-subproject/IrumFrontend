import {
  NormalBase,
  RegularBase,
  SemiBase,
} from 'components/atomic/typography/FontWeightBase.tsx';
import styled from 'styled-components/native';

const Semi = styled(SemiBase).attrs(props => ({color: props.color}))`
  font-size: ${props => props.theme.typo.subBody.size}px;
  letter-spacing: ${props => props.theme.typo.subBody.letterSpacing}px;
  line-height: ${props => props.theme.typo.subBody.lineHeight}px;
`;
const Normal = styled(NormalBase).attrs(props => ({color: props.color}))`
  font-size: ${props => props.theme.typo.subBody.size}px;
  letter-spacing: ${props => props.theme.typo.subBody.letterSpacing}px;
  line-height: ${props => props.theme.typo.subBody.lineHeight}px;
`;
const Regular = styled(RegularBase).attrs(props => ({color: props.color}))`
  font-size: ${props => props.theme.typo.subBody.size}px;
  letter-spacing: ${props => props.theme.typo.subBody.letterSpacing}px;
  line-height: ${props => props.theme.typo.subBody.lineHeight}px;
`;

export const SubBody = {
  Semi,
  Normal,
  Regular,
};
