import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FiUser } from 'react-icons/fi';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import css from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ addUser, toggleModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    const modelId = nanoid();
    addUser({ id: modelId, name: name, number: number });
    toggleModal();
  };

  const handlerChangeName = e => {
    //  const { name, value } = e.currentTarget;
    setName(e.currentTarget.value);
  };

  const handlerChangeNumber = e => {
    //  const { name, value } = e.currentTarget;
    setNumber(e.currentTarget.value);
  };

  return (
    <form onSubmit={handlerSubmit} className={css.form} autoComplete="off">
      <span className={css.iconSpan}>
        <FiUser />
      </span>
      <label className={css.formLabel}>
        {/* <p className={css.formParagraph}>Name:</p> */}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlerChangeName}
          className={css.input}
          placeholder="Name"
        />
      </label>
      <label className={css.formLabel}>
        {/* <p className={css.formParagraph}>Number:</p> */}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handlerChangeNumber}
          className={css.input}
          placeholder="Number"
        />
      </label>
      <label className={css.imageLabel}>
        <MdOutlineAddAPhoto className={css.icon} />
        <input type="file" name="image" className={css.imageInput} />
      </label>

      <button className={css.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  addUser: PropTypes.func,
  toggleModal: PropTypes.func,
};
