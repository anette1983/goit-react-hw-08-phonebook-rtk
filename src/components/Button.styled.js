import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  font-weight: 200;
  padding: 6px 12px;
  /* font-family: inherit;
  font-style: normal; */

  /* border: 1px solid #8080808a; */
  border: 1px solid #ffffff;

  border-radius: 4px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export default StyledButton;
