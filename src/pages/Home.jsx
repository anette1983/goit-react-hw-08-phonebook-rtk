import { useNavigate } from 'react-router-dom';
import {
  ColoredButton,
  StyledButtonDiv,
  StyledContainer,
  StyledHeader,
  StyledHeaderWrap,
} from './Home.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

const Home = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledHeaderWrap>
        <StyledHeader>Phonebook</StyledHeader>
        <p>ALL YOUR CONTACTS IN ONE PLACE</p>
      </StyledHeaderWrap>
      {!isLoggedIn && (
        <StyledButtonDiv>
          <ColoredButton
            variant="contained"
            size="large"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log In
          </ColoredButton>
          <ColoredButton
            variant="contained"
            size="large"
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </ColoredButton>
        </StyledButtonDiv>
      )}
    </StyledContainer>
  );
};

export default Home;
