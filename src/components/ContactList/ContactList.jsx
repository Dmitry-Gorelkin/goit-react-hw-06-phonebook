import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { ContactListConteiner } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ContactListConteiner>
        {visibleContactList.map(item => {
          const { id, name, number } = item;
          return (
            <ContactCard
              key={id}
              name={name}
              number={number}
              onDelete={() => dispatch(delContact(id))}
            />
          );
        })}
      </ContactListConteiner>
    </>
  );
};
