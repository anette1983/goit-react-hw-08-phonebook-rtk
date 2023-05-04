import StyledButton from 'components/Button.styled';
import StyledForm from 'components/ContactForm/ContactForm.styled';
import { StyledLabel } from 'components/LoginForm/LoginForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </StyledLabel>

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

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};
