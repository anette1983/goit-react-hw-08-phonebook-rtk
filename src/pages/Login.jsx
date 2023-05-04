import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { StyledContainer } from './Home.styled';

const Login = () => {
  // селектором забираємо ерор
  // const error = useSelector(selectError);
  // if (error) {
  //   toast.error(error);
  // }
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <StyledContainer>
          <LoginForm />
        </StyledContainer>
      </div>
    </HelmetProvider>
  );
};

export default Login;
