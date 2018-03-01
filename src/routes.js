import React from 'react';
import {Redirect, Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Profile from './Profile/Profile';
import Ping from './Ping/Ping';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import ApiList from './components/ApiList'
import Nav from './components/Nav'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication(nextState.location.hash);
    }
}

// <Route exact path="/" component={ App }/>


// ( auth.isAuthenticated() ? (<ApiList/>) : (<div>No</div>))}/>
export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history}>
            <div className="uk-section-primary tm-section-texture">
                <Nav auth={auth}/>
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />}/>
                 <Route path="/api-list" render={(props) => ( auth.isAuthenticated() ? (<ApiList/>) : (<ApiList/>))}/>
                <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )}/>
                <Route path="/ping" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Ping auth={auth} {...props} />
            )
          )}/>
                <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
            </div>
        </BrowserRouter>
    );
}
