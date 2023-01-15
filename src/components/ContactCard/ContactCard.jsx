import PropTypes from 'prop-types';
import { ContactListItem, ContactListItemDelete } from './ContactCard.styled';

export const ContactCard = ({ name, number, onDelete }) => {
  return (
    <ContactListItem>
      {name}: {number}
      <ContactListItemDelete onClick={onDelete}>Delete</ContactListItemDelete>
    </ContactListItem>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
