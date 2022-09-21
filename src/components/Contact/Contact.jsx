import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import s from './Contact.module.css';

function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <div className={s.wrapper}>
        <span className={s.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={s.wrapper}>
        <p className={s.number}>{number}</p>
        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default Contact;
