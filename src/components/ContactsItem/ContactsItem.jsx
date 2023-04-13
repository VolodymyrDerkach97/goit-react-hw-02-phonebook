const ContactsItem = ({ name, id, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default ContactsItem;
