import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, changeFilter }) {
  return (
    <label className={s.label}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
