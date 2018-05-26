import {connect} from 'react-redux';
import Main from './Main';
import {bindActionCreators} from 'redux';
import * as action from '../redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        posts : state
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(action, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;