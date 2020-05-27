import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Books from '../../containers/Books';
import MenuBar from '../Menu';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Container>
    </Router>
  );
};

export default App;
