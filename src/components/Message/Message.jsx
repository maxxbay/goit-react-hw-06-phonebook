import PropTypes from 'prop-types';
import s from './Message.module.css';

function Message({ text }) {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>{text}</p>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
