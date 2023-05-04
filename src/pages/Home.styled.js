import styled from 'styled-components';
import image from '../images/Background-2.jpg';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const StyledContainer = styled.div`
  /* min-height: 'calc(100vh - 50px)'; */
  min-height: 100vh;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: space-around;

  /* на мобилку:    align-items: center;
    /* justify-content: space-around;
    flex-direction: column;
    justify-content: center;
     */

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StyledHeaderWrap = styled.div`
  color: #ffffff;
  p {
    font-size: 18px;
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      margin-bottom: 32px;
    }
  }
`;

export const StyledHeader = styled.h1`
  font-family: Genty;
  font-size: 115px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 65px;
    text-align: center;
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
  @media screen and (max-width: 768px) {
    width: 120px;
    font-size: 25px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  color: #2a363b;
`;

export const ColoredButton = styled(Button)`
  color: black;
  background-color: white;
  font: inherit;
`;
