import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}