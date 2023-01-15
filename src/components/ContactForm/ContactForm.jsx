import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ contactList, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(`Такого варианта: ${name}, нет.`);
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (contactList.find(i => i.name.toLowerCase() === name.toLowerCase())) {
      Notify.warning(`${name} is already in contacts.`);
      setName('');
      return;
    }

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInput}
          value={name}
          placeholder="Ivan Ivanov"
        />
      </Label>

      <Label>
        Nunber
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInput}
          value={number}
          placeholder="000-000-00-00"
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
