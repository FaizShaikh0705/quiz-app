import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from './pages/SignUp/SignUp';
import ContactLeads from './pages/Leads/ContactLeads';
import './App.css';
import Programs from './pages/Programs/Programs';
import Testimonails from './pages/Testimonails/Testimonails';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/programs" component={Programs} />
          <PrivateRoute path="/testimonails" component={Testimonails} />
          <PrivateRoute path="/contact-leads" component={ContactLeads} />
          <Route path="/Login" component={Login} />
          <Route path="/safari-kids-SignUp" component={SignUp} />
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
