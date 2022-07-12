import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import MainPage from './main/main_page';
import NavBarContainer from './nav/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import "../styles/app.css"
import Sessions from './session/sessions';
import LoginMainPage from './main/login_main_page';




const App= () => (
    
    <div className="app">
         <header>
            <NavBarContainer />
         </header>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            
            
            <AuthRoute exact path="/sessions" component={Sessions} />
            {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            <ProtectedRoute exact path="/main" component={LoginMainPage} />
            <ProtectedRoute exact path="/current" component={ProfileContainer} />
        </Switch>
    </div>
)

export default App;