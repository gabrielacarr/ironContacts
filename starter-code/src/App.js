import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    fiveContacts: contacts.splice(0, 5), // slice to select the first five contacts // 0,1,2,3,4,
    remainContacts: contacts // 5-199
  };

// DISPLAY FIVE CONTACTS 

  displayFive =  () => {
    return this.state.fiveContacts.map((eachContact, index) => {
    return ( 
      <tr key={index}>
            <td><img width="50 px" src={eachContact.pictureUrl} alt={eachContact.name}/> </td>
            <td>{eachContact.name}</td>
            <td>{eachContact.popularity}</td>

            {/* // DELETE CONTACT BUTTON */}
            <button onClick={() => this.deletedContact(index)}> Remove </button>
            </tr>
    )
    })
  }
// DELETE CONTACTS

  deletedContact = (index) => {
    let copyOfDisplayed = [...this.state.fiveContacts]
    copyOfDisplayed.splice(index, 1)
    this.setState ({
      fiveContacts: copyOfDisplayed,
    })
  }
// RANDOM CONTACT

  addRandoContact = () => {
    if(this.state.remainContacts.length){
      let randomIndex = Math.floor(Math.random()* this.state.remainContacts.length)
      let randoContact = this.state.remainContacts[randomIndex]
      let copyOfDisplayed = [...this.state.fiveContacts]
      copyOfDisplayed.push(randoContact)
      // COPY OF REMAINING CONTACTS
    let copyOfRemain = [...this.state.remainContacts]
   copyOfRemain.splice(randomIndex, 1)

      this.setState({
        fiveContacts: copyOfDisplayed,
        remainContacts: copyOfRemain,
      })
    }
  }
// SORT CONTACT NAME

  sortName = () => {
    let copyOfDisplayed = [...this.state.fiveContacts]
    copyOfDisplayed.sort((a, b) => {
      return a.name.localCompare(b.name)
    })
    this.setState({
      fiveContacts: copyOfDisplayed,
    })
  }
// SET POPULARITY 

  sortPopularity = () => {
    let copyOfDisplayed = [...this.state.fiveContacts]
    copyOfDisplayed.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      fiveContacts: copyOfDisplayed,
    })
  }
// INSIDE TABLE

  render() {
    return (
          <div className="App">
            {/* // ADD AND SORT BUTTON */}
            <button onClick={this.addRandoContact}> Add Contact </button>
            <button onClick={this.sortName}> Sort by Name   </button>
            <button onClick={this.sortPopularity}> Sort by Popularity </button>
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
