import PropTypes from 'prop-types';
import css from './ListItem.module.css';

const ListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id} className={css.listItem}>
      {name}: {number}
      <button
        onClick={() => deleteContact(id)}
        className={css.button}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
