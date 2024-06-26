import styled from 'styled-components/native';

interface RowColumnInterface {
  padding?: [number, number] | [number];
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
}

const RowColumnBase = styled.View<RowColumnInterface>`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'start'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'start')};
  padding: ${props =>
    props.padding
      ? props.padding[1]
        ? `${props.padding[0]}px ${props.padding[1]}px`
        : `${props.padding[0]}px`
      : 0};
  background-color: ${props => props.backgroundColor};
`;
const RowBase = styled(RowColumnBase)`
  flex-direction: row;
`;
const ColBase = styled(RowColumnBase)`
  flex-direction: column;
`;

const Row0 = styled(RowBase)`
  gap: 0;
`;
const Row4 = styled(RowBase)`
  gap: 4px;
`;
const Row8 = styled(RowBase)`
  gap: 8;
`;
const Row12 = styled(RowBase)`
  gap: 12px;
`;
const Row16 = styled(RowBase)`
  gap: 16px;
`;
const Row20 = styled(RowBase)`
  gap: 20px;
`;

const Col0 = styled(ColBase)`
  gap: 0;
`;
const Col4 = styled(ColBase)`
  gap: 4px;
`;
const Col8 = styled(ColBase)`
  gap: 8px;
`;
const Col12 = styled(ColBase)`
  gap: 12px;
`;
const Col20 = styled(ColBase)`
  gap: 20px;
`;
const Col22 = styled(ColBase)`
  gap: 22px;
`;
const Col24 = styled(ColBase)`
  gap: 24px;
`;

export {
  Row0,
  Row4,
  Row8,
  Row12,
  Row16,
  Row20,
  Col0,
  Col4,
  Col8,
  Col12,
  Col20,
  Col22,
  Col24,
};
