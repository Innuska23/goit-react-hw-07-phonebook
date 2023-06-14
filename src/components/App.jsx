import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from './ContactList/ContactList';
import { Container } from "./App.styled";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../components/redux/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;