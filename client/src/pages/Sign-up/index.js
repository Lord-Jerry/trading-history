import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../../redux/actions';
import SignUp from './Signup';

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser,
    authError: state.authReducer.authError,
    loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            createUser,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
