import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { selectAuth } from 'redux/auth/selectors';
import { ColoredButton, StyledUserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { user } = useAuth();
  const { user } = useSelector(selectAuth);
  // const name = useSelector(selectUserName);

  return (
    <StyledUserWrapper>
      <p>Welcome, {user.name}</p>
      <ColoredButton
        sx={{ color: 'rgb(42, 54, 59)', border: '1px solid rgb(42, 54, 59)' }}
        size="medium"
        type="button"
        variant="outlined"
        // size="large"
        onClick={() => dispatch(logout())}
      >
        Logout
      </ColoredButton>
    </StyledUserWrapper>
  );
};

// добавить аватар
