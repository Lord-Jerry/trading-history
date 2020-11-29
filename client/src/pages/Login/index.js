import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../redux/actions';
import Login from './Login';

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser,
    authError: state.authReducer.authError,
    loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        loginUser,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
