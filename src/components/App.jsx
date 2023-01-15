import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const contacts = localStorage.getItem('contacts');
      return contacts ? JSON.parse(contacts) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  const handleInputFilter = e => setFilter(e.target.value);

  const handleSubmitContacts = ({ name, number }) =>
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);

  const deleteContact = id =>
    setContacts(prevState => prevState.filter(item => item.id !== id));

  const normalizeFilter = filter.toLowerCase();
  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="phonebook">
        <ContactForm onSubmit={handleSubmitContacts} contactList={contacts} />
      </Section>
      <Section title="contacts">
        <Filter onChange={handleInputFilter} value={filter} />
        {contacts.length !== 0 ? (
          <ContactList contact={visibleContactList} onDelete={deleteContact} />
        ) : (
          <Notification message="no contacts" />
        )}
      </Section>
    </Container>
  );
};
