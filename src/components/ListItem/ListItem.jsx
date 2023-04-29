import PropTypes from 'prop-types';
import css from './ListItem.module.css';

const ListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id} className={css.listItem}>
      <div className={css.imageThumb}></div>

      <div className={css.dataBox}>
        <p className={css.pName}>{name}</p>
        <p className={css.pNumber}>{number}</p>
      </div>

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
