import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  addContactSuccess,
  delContactSuccess,
  filterContact,
} from './actions';

const itemsReduсer = createReducer([], {
  [fetchContactSuccess]: (state, action) => action.payload,
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [delContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterReduсer = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

const contactsReduсer = combineReducers({
  items: itemsReduсer,
  filter: filterReduсer,
});

export default contactsReduсer;
