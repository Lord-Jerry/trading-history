import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from './layout';

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {

    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
