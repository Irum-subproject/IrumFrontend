import styled from 'styled-components/native';

interface TypoBaseInterface {
  color?: string;
  disabled?: boolean;
  width?: string;
  ellipsis?: boolean;
}

const SemiBase = styled.Text.attrs<TypoBaseInterface>(props => ({
  numberOfLines: props.ellipsis ? 1 : undefined,
}))`
  color: ${props =>
    props.color
      ? props.theme.palette[props.color]
      : props.theme.palette.gray900};
  font-family: 'Pretendard Variable';
  font-weight: ${props => props.theme.typo.semi};
  ${props => props.width && `width: ${props.width};`}
  ${props => props.disabled && 'text-decoration: line-through;'}
`;

const NormalBase = styled.Text.attrs<TypoBaseInterface>(props => ({
  numberOfLines: props.ellipsis ? 1 : undefined,
}))`
  color: ${props =>
    props.color
      ? props.theme.palette[props.color]
      : props.theme.palette.gray700};
  font-family: 'Pretendard Variable';
  font-weight: ${props => props.theme.typo.normal};
  ${props => props.width && `width: ${props.width};`}
  ${props => props.disabled && 'text-decoration: line-through;'}
`;

const RegularBase = styled.Text.attrs<TypoBaseInterface>(props => ({
  numberOfLines: props.ellipsis ? 1 : undefined,
}))`
  color: ${props =>
    props.color
      ? props.theme.palette[props.color]
      : props.theme.palette.gray900};
  font-family: 'Pretendard Variable';
  font-weight: ${props => props.theme.typo.regular};
  ${props => props.width && `width: ${props.width};`}
  ${props => props.disabled && 'text-decoration: line-through;'}
`;

export {SemiBase, NormalBase, RegularBase};
