import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Container Components
import { App, Home, Signup, Profile, About, Help} from 'containers';
import SignupSuccess from 'components/SignupComponents/SignupSuccess'
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="aboutus" component={About} />
                <Route path="signup" component={Signup} />
                <Route path="signupsuccess" component={SignupSuccess} />
                <Route path="profile" component={Profile} />
                <Route path="help" component={Help} />
            </Route>
        </Router>
    </Provider>, rootElement
);