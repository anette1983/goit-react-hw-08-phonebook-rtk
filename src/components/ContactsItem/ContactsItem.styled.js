import styled from 'styled-components';

const StyledItem = styled.li`
  width: 310px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 4px 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  & span {
    margin-right: 8px;
  }
`;

export default StyledItem;
