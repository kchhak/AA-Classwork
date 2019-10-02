import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: userForm => dispatch(login(userForm))
})

export default connect(null, mapDispatchToProps)(Login)