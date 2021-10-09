import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Detailed from './Detailed';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Container from '../components/Container';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Container>
          <Home />
        </Container>
      </Route>
      <Route path="/detailed/:id">
        <Container>
          <Detailed />
        </Container>
      </Route>
      <Route path="*">
        {/* <Home /> */}
      </Route>
    </Switch>
  );
}

export default App;
