import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWaring = (WrappedComponent) => {
    return (props) =>(
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
};

const withAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in to see this content!</p>}
        </div>
    )
}

const AdminInfo = withAdminWaring(Info);
const AuthInfo = withAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="costam"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="costam"/>, document.getElementById('app'))