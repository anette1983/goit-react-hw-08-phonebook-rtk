import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { StyledContainer } from './Home.styled';

const Register = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <StyledContainer>
          <RegisterForm />
        </StyledContainer>
      </div>
    </HelmetProvider>
  );
};

export default Register;
