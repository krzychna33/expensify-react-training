import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export class LoginPage extends React.Component {
    render(){
        return (
            <div>
                <h1>Expensify app</h1>
                <h4>Please log in.</h4>
                <button onClick={this.props.startLogin}>Login</button>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);