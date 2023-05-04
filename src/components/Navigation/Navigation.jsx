import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
