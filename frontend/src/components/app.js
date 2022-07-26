import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import NavBarContainer from './nav/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import "../styles/app.css";
import Sessions from './session/sessions';
import LoginMainPage from './main/login_main_page';
import AboutMe from './about_me/about_me';



const App = () => (

    <div className="app">
        <header>
            <NavBarContainer />
        </header>
        <main>
            <Switch>
                <AuthRoute exact path="/" component={MainPage} />


                <AuthRoute exact path="/sessions" component={Sessions} />
                <ProtectedRoute exact path="/main" component={LoginMainPage} />

                <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
            </Switch>
        </main>
        {/* <footer>
            <AboutMe />
        </footer> */}
    </div>
);

export default App;