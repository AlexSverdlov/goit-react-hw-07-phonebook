import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const visibleContacts = createSelector(
  [getFilter, getItems],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getItems,
  getFilter,
  visibleContacts,
};
