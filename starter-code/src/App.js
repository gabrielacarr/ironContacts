import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    fiveContacts: contacts.splice(0, 5), // slice to select the first five contacts // 0,1,2,3,4,
    remainContacts: contacts // 5-199
  };

  displayFive =  () => {
    return this.state.fiveContacts.map((eachContact, index) => {
    return ( 
      <tr key={index}>
            <td><img width="50 px" src={eachContact.pictureUrl} alt={eachContact.name}/> </td>
            <td>{eachContact.name}</td>
            <td>{eachContact.popularity}</td>
            </tr>
    )
    })
  }


  addRandoContact = () => {
    if(this.state.remainContacts.length){
      let randomIndex = Math.floor(Math.random()* this.state.remainContacts.length)
      let randoContact = this.state.remainContacts[randomIndex]
      let copyOfDisplayed = [...this.state.fiveContacts]
      copyOfDisplayed.push(randoContact)

    let copyOfRemain = [...this.state.remainContacts]
   copyOfRemain.splice(randomIndex, 1)

      this.setState({
        fiveContacts: copyOfDisplayed,
        remainContacts: copyOfRemain,
      })
    }
  }

  render() {
    return (
          <div className="App">
            <button onClick={this.addRandoContact}> Add Contact </button>
            <button onClick={this.sortName}> Add Name  </button>
            <button onClick={this.sortPopularity}> Add Popularity </button>
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
// use splice method to cut of the first five contacts that are going to be use
// slice returns a sections of an array, comes with two params
// where is it going to start and where will it end
// .splice(0,5) // want to begin at index 0 and end at 5 elements
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice/
// after splice, create remainContacts: contacts // 5-199
// now there are two things
// to avoid repeat, need to remove and add another
// EXPLANATION
// there is a rando number, and contact
// this.state.remainContact needs to be place before the index on the console.log
// used the new one that never changes, and can remove from remianing contacts

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
// map method,
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
//       <td><img width="50 px" src={eachContact.pictureUrl} alt={eachContacts[0].name}/> </td>
//       <td>{eachContacts[0].name}</td>
//       <td>{eachContacts[0].popularity}</td>
//       </tr>
// make array equal to every element in that array
// iteration through array
// and adding map
// return a new array
// and each element will populate five js embedded code

// inside body.call the function {this.displayFive()}
// this displatFive is the class component 

// RETURNS

// first return, /* returns the map and assign a new array */
// second return, /* returns the function */


// UNIQUE KEY 

// parent tag, <tr>
// specify attribute key and equal 
// this is for array that is static, no further adjustments 
// make code smaller, remove return, add (), add index as param
// create a key tag for tr code
// if you use an inde of a ky and sort on your array, no longer array, no longer an original placement of array
// displayFive =  () => {
// return this.state.fiveContacts.map((eachContact, index) => {
//   return ( 
//     <tr key={index}>

// or making it a unique key
// <tr key={eachContact.name}>
// removes warnings on console, for cleaner code
// or remove option for warnings on console



/////////////////////////////////////////////////////////////////

// BUTTON
// inside <div>
// place onClick method
// above render(), create function for addRandoContact = () => {}
// to call function, place addRandoContact inside of inClick as:
// {this.addRandoContact}


// RANDO TO ARRAY
// let randoNum = Math.floor(Math.random()*contact.lengtht)
// rnandom number
// random creates repeats
// we need to create a random number we havent used

//