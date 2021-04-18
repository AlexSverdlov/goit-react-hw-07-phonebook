import { connect } from 'react-redux';
import * as actions from '../redux/operations';
import contactSelectors from '../redux/contacts-selectors';
import ContactList from './ContactList.view';

const mapStateToProps = state => ({
  contacts: contactSelectors.visibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
