import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthPage from './pages/Auth/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <main className={classes.mainContent}>
          <Switch>
            <Redirect from='/' to='/auth' exact />
            <Route path='/auth' component={AuthPage} />
            <Route path='/events' component={EventsPage} />
            <Route path='/bookings' component={BookingsPage} />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
