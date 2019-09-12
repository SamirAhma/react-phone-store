import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact component={Default}></Route>
        </Switch>
        <Modal></Modal>
      </React.Fragment>
    );
  }
}
