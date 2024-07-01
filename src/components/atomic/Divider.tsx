import styled from 'styled-components/native';

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.palette.gray100};
`;

export default Divider;
