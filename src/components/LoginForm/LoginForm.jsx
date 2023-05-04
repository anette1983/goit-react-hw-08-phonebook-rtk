import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
// import { StyledForm, StyledLabel } from './LoginForm.styled';
import StyledForm from 'components/ContactForm/ContactForm.styled';
import { StyledLabel } from 'components/LoginForm/LoginForm.styled';
import StyledButton from 'components/Button.styled';
import { selectAuth } from 'redux/auth/selectors';
import { CircularProgress } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useSelector(selectAuth);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </StyledLabel>

      <StyledLabel>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </StyledLabel>

      <StyledButton type="submit">
        {isLoading ? <CircularProgress /> : 'Log in'}
      </StyledButton>
    </StyledForm>
  );
};
