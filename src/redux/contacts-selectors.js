const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const visibleContacts = state => {
  const filter = getFilter(state);
  const contacts = getItems(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default {
  getItems,
  getFilter,
  visibleContacts,
};
