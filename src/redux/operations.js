import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => dispatch => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};

export const addContact = item => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const delContact = id => dispatch => {
  dispatch(actions.delContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.delContactSuccess(id)))
    .catch(error => dispatch(actions.delContactError(error)));
};
