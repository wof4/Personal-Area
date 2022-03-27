import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/main/MainPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contacts" >
          <MainPage />
        </Route>
        <Redirect from="/" to="/contacts" />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
