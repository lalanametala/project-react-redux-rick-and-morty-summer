import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import './App.css';
import AppContext from './context/AppContext';

function App () {
    const { user: {redirect} } = useContext(AppContext);
    return (
      <div>
        {redirect && <Redirect from="/" to="/personagens" />}
        <Switch>
          <Route path="/personagens" component={ MainPage } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>

    );
}

export default App;
