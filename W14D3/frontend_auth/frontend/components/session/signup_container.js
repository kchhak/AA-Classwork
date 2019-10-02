import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: userForm => dispatch(createNewUser(userForm))
})

export default connect(null, mapDispatchToProps)(Signup)