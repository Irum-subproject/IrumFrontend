import styled from 'styled-components/native';

const SemiBase = styled.Text<{color?: string}>`
  color: ${props =>
    props.color
      ? props.theme.palette[props.color]
      : props.theme.palette.gray900};
  font-family: 'Pretendard Variable';
  font-weight: 600;
`;

const NormalBase = styled.Text<{color?: string}>`
  color: ${props =>
    props.color
      ? props.theme.palette[props.color]
      : props.theme.palette.gray900};
  font-family: 'Pretendard Variable';
  font-weight: ${props => props.theme.typo.normal};
`;

const RegularBase = styled.Text<{color?: string}>`
  color: ${props =>
    props.color
      ? props.theme.palette[props.color]
      : props.theme.palette.gray900};
  font-family: 'Pretendard Variable';
  font-weight: ${props => props.theme.typo.regular};
`;

export {SemiBase, NormalBase, RegularBase};
