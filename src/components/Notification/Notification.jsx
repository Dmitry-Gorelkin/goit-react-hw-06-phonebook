import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p style={{ textTransform: 'uppercase' }}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
