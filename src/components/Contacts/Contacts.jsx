import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import ListItem from 'components/ListItem/ListItem';

const Contacts = ({ contactList, deleteContact }) => {
  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {contactList.map(({ id, name, number }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
