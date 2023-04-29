import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { TiUserAdd } from 'react-icons/ti';

const Filter = ({ filter, onModalOpen }) => {
  return (
    <div className={css.panel}>
      <label className={css.label}>
        {/* Filter by Name: */}
        <input
          onChange={e => filter(e)}
          className={css.input}
          type="text"
          placeholder="Search by Name"
        ></input>
        <span className={css.searchPic}>
          <FcSearch />
        </span>
      </label>
      <span
        onClick={() => onModalOpen()}
        className={css.modalOpen}
        type="button"
      >
        <TiUserAdd></TiUserAdd>
      </span>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.func,
  onModalOpen: PropTypes.func,
};
