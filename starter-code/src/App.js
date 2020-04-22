import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    fiveContacts: contacts.slice(0, 5), // slice to select the first five contacts
  };
  render() {
    return (
          <div className="App">
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img width="50 px" src={this.state.fiveContacts.pictureUrl} alt={this.state.fiveContacts[0].name}/> </td>
                  <td>{this.state.fiveContacts[0].name}</td>
                  <td>{this.state.fiveContacts[0].popularity}</td>
                </tr>
              </tbody>
            </table>
          </div>
    );
  }
}

export default App;

// NOTATIONS FOR APP.JS

// what is a method we can use to cut out a ection of the array
// line 7
// state is an object, create a new property "contact"
// use splice method to cut of the first five contacts that are going to be used
// slice returns a sections of an array, comes with two params
// where is it going to start and where will it end
// .slice(0,5) // want to begin at index 0 and end at 5 elements
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice/
