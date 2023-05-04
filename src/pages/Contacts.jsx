import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';
import {
  StyledContainer,
  StyledFormWrapper,
  StyledImgWrapper,
} from './Contacts.styled';
import girl from '../images/girl-bg.png';
import { Typography } from '@mui/material';
import AddContactModal from '../components/AddContactModal.jsx';
import { selectToken } from 'redux/auth/selectors';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const Contacts = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const [getContacts, result] = useGetContactsQuery();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <StyledContainer>
        <StyledFormWrapper>
          <Typography variant="h4" component="h1" mt={2} mb={2}>
            Your contacts
          </Typography>
          {/* <h1>Your contacts</h1> */}
          <AddContactModal />
          {/* <ContactForm /> */}
          <Filter />
          {isLoading && !error && <h3>Request in progress...</h3>}
          {error && <p>{error}</p>}
          <ContactsList />
        </StyledFormWrapper>
        <StyledImgWrapper>
          <img src={girl} alt="Smiling girl with mobile phone" height="1620" />
        </StyledImgWrapper>
      </StyledContainer>
    </HelmetProvider>
  );
};

export default Contacts;
