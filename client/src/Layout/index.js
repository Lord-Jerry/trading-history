import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkUserLoggedIn } from '../redux/actions';
import Layout from './layout';

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    checkUserLoggedIn,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
