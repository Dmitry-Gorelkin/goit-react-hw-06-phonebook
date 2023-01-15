import PropTypes from 'prop-types';
import { SectionConteiner, Title, Context } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionConteiner>
      <Title>{title}</Title>
      <Context>{children}</Context>
    </SectionConteiner>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
