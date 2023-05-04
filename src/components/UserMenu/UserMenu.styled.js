import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & > p {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ColoredButton = styled(Button)(() => ({
  border: '1px solid rgb(42, 54, 59)',
  '&:hover': {
    color: 'rgb(232, 74, 95)',
    border: '1px solid rgb(232, 74, 95)',
  },
}));
