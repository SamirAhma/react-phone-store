import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pr-5">
            <h1 className="display-3" style={{ fontSize: 100 }}>
              404
            </h1>
            <h1 style={{ fontSize: 100, color: "red" }}>error</h1>
            <h2 style={{ fontSize: 50 }}>page not found</h2>
            <h3>
              the requestes URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
