import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { StyledAppBar } from './AppBar.styled';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <StyledAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};
