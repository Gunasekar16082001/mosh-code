import React from "react";
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import './App.css';
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import  RegisterForm  from './components/registerForm';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className="container">
        <Switch>
        <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm}/>
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect exact from="/" to="/movies"/>
          <Redirect to="/not-found"/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
