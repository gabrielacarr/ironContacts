import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    fiveContacts: contacts.slice(0, 5), // slice to select the first five contacts
  };

  displayFive =  () => {
    let newArray = this.state.fiveContacts.map(eachContact => {
    return ( 
      <tr>
                  <td><img width="50 px" src={eachContact.pictureUrl} alt={eachContact.name}/> </td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  </tr>
    )
    })
    return newArray 
  }
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
              {this.displayFive()}
              {/*
                // <tr>
                //   <td><img width="50 px" src={this.state.fiveContacts.pictureUrl} alt={this.state.fiveContacts[0].name}/> </td>
                //   <td>{this.state.fiveContacts[0].name}</td>
                //   <td>{this.state.fiveContacts[0].popularity}</td>
                // </tr> 
              */}
              </tbody>
            </table>
          </div>
    );
  }
}

export default App;

// NOTATIONS FOR APP.JS

// what is a method we can use to cut out a section of the array
// state is an object, create a new property "contact"
// use splice method to cut of the first five contacts that are going to be used
// slice returns a sections of an array, comes with two params
// where is it going to start and where will it end
// .slice(0,5) // want to begin at index 0 and end at 5 elements
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice/

// STATE

// state object //
// creatinf attributes/ keys
// special feature, once you make changes inside the state, the react will render to those new changes

// CONSOLE LOG FIVE CONTACTS

// console.log(this.state.fiveContacts), after render()
// to print the five contacts
// in console it reflects an array of five objects

// CONSOLE LOG FIVE CONTACTS

// console.log(this.state.fiveContacts), after render()
// to print the five contacts
// in console it reflects an array of five objects

// CREATING A TABLE

// line 16
// create a table // html format is <table></table>
// <thead> first rows with headings </thead>
// <tr> row </tr>
// <th> thread heading </th>
// <th>table heading </th>
// <tbody> anything below the heading row </tbody>

// HOW TO GET NAME OF FIRST OBJECT

// index of the array
// {this.state.fiveContacts[0].name}
// {} how to embed js to html
// point to the [0] index
// prints "Idris Elba"


// HOW TO GRAB THE IMAGE 
// IDRIS ELBA

// similar to above
// since we are targeting the image url from the ./contacts.json 
// create a self closing image tag 
// gernerate src and alt
// {this.state.fiveContacts[0].name}
// point to the [0] index
// place inside the src
// for alt, place index of array for the name // {this.state.fiveContacts[0].name} 

// ADJUSTING WIDTH OF IMG
// place width inside the img
// img width="50 px" src==""
// alt="{eachContact.name}"

// POPULARITY

// same as above, update to popularity rather than name
// {this.state.fiveContacts[0].popularity} 

// CREATE MULTIPLE FUNCTIONS

// create a function that returns content five times
// create a function to create loop
// call is displayFive
// above render
// inside of the function,create a new array
// new array is equal to this.state.fiveContacts.map(eachContact)
// map mwthod,
// everytime that it loops through, the variable eachContact will equal one contact at a time
// as a function, using fat arrow
// return the repeated code
// place the copied code that will be repeated inside the return
// this has now generated a react list
// instead of using this.state.fiveContact
// update to eachContact.name
// EX:
// return (
//   <tr>
//               <td><img width="50 px" src={eachContact.pictureUrl} alt={eachContacts[0].name}/> </td>
//               <td>{eachContacts[0].name}</td>
//               <td>{eachContacts[0].popularity}</td>
//               </tr>
// make array equal to every element in that array
// iteration through array
// and adding map
// return a new array
// and each element will populate five js embedded code

// inside body.call the function {this.displayFive()}
// this displatFive is the class component 


// first return, /* returns the map and assign a new array */

// second return, /* returns the function */
