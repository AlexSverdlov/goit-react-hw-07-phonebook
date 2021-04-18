import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('APP/FETCH_CONTACT_REQUEST');
export const fetchContactSuccess = createAction('APP/FETCH_CONTACT_SUCCESS');
export const fetchContactError = createAction('APP/FETCH_CONTACT_ERROR');

export const addContactRequest = createAction('APP/ADD_CONTACT_REQUEST');
export const addContactSuccess = createAction('APP/ADD_CONTACT_SUCCESS');
export const addContactError = createAction('APP/ADD_CONTACT_ERROR');

export const delContactRequest = createAction('APP/DEL_CONTACT_REQUEST');
export const delContactSuccess = createAction('APP/DEL_CONTACT_SUCCESS');
export const delContactError = createAction('APP/DEL_CONTACT_ERROR');

export const filterContact = createAction('APP/FILTER_CONTACT');
