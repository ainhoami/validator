import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Thanks from "./ThankYou"
import Form from "./Form"

import '../styles/base.css';

function App(props) {
  return (
    <Router>
    <div className="container">
      <Route exact path="/" component={Form}/>
      <Route path="/thanks" component={Thanks}/>

    </div>
    </Router>
  );
}

export default App;
