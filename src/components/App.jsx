import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="phonebook">
        <ContactForm />
      </Section>
      <Section title="contacts">
        <Filter />
        {contacts.length !== 0 ? (
          <ContactList />
        ) : (
          <Notification message="no contacts" />
        )}
      </Section>
    </Container>
  );
};
