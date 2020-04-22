![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronContacts 
# BRIE NOTATIONS & GUIDELINES

## Introduction

After Ironhack, you have decided to work in the movie industry, and you've found a job where you need to manage the contacts of a famous producer.

We are going to create a contact management app with React for this producer.

You can find the starter code in the starter code folder of this GitHub repo.

## Submission

- Upon completion, run the following commands

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Installation

```
$ cd starter-code
$ npm install
$ npm start
```

## Instructions

### Iteration 1 | Display 5 Contacts

Let's take a look at the starter code.

Inside `src` folder, we can find `contacts.json`, a JSON file with the producer's contacts. Import this file and **create an array of the 5 first contacts** to use as your initial state.

Display that array of 5 contacts in a `<table>` and display the `picture`, `name`, and `popularity` of each contact.

To import `contacts.json` in `App.js`, you can simply use:

```js
import contacts from './contacts.json';
```

At the end of this iteration, your application should look like this:

![Screenshot](https://i.imgur.com/fPuwZXv.png)


## PROCESS
## How do we get there? What's the thought process?
### Steps for completing: Iteration 1

### FIRST: What are we setting up and how we we determine what is it?

```
 - Need to import producer's contacts from contacts.json into App.js inside the src folder
 - Using DevTools, how can we determine what is inside the contacts.json file?
 - By opening the local app source http://localhost:3000/ , inspect the console
 - The console reflects that the contacts.json file is an array with 199 contacts
 - Which holds objects that contain the following four properties (also known as keys): 
   name, pictureUrl, popularity, and id

```

### NEXT: What are the instructions asking to do? 

```
 1. Build a table with the first five contacts from contact.json 
 2. Initialize a state
 3. Display a table of the five contacts
 
```

### How is that accomplised? 
### Let's go follow the steps above, one at a time:


1. Build a table with the first five contacts from contact.json 


 - What method should be used to return the first five contacts? How do we do this?
 - By creating a new array and applying slice method
 - The new array, will be sliced and the original will not be mutated
   (reference original for later)
 
 - What is the slice method? .slice() removes the first elements from an array
 - Inside the slice methods paramaters (where to begin, where slice ends)


2. Initialize a state
There are many ways of reducing block of code, however, we will follow the steps for the long way in order to understand how to make it shorthand.


 - Need to initialize a state 
 - State is an object and inside holds keys (known as properties)
 - Create a new key and call it displayedContacts
 - State has special feature: once there are changes inside state, 
   React will rerender those changes
 - Console after render to see confirm new array changes

```js
 Example:
 class App extends Component {
     state = {
         displayedContacts: remainingContacts.slice(0,5)
     }
 }
 render() {
     console.log(this.state.displayedContacts) // relfects and array of five objects
 }
```

 3. Display a table of the five contacts

 
 - Create a table? How is that done?
 - Inside the div, create a table tag and the following tags that belong inside
 - In the body tag, display the contacts name by adding the state 
 - Embed js into html
 - And the same for the other keys
 - Keep in mind to adjust where the state applies to
 
 
 ```js
 <div className="App">
    <table>
        <thread> //table title
            <tr> // table row
                <th>Picture</th> // table heading
                <th>Name</th>
                <th>Popularity</th>
            </tr>
        </thread>
        <tbody>
        <tr>
             <td><img width="50 px" src="{this.state.displayedContacts[0].pictureUrl}" alt="<td>{this.state.displayedContacts[0].name}"</td> // prints image from .json file
             <td>{this.state.displayedContacts[0].name}</td> // prints Idei Elba
             <td>{this.state.displayedContacts[0].popularity}</td> // prints popularity amount
        </tr>
        </tbody>
    </table>
 </div>
 ```

 - Essentially we need to repeat the code five times for each contact
 - However, there is a way to reduce the block for the same outcome
 - We can do this by creating a function that contains that block of code

```js
showFive = () => {
    return this.state.displayedContacts.map(eachContact => {
        return (
             <td><img width="50 px" src="{this.state.displayedContacts[0].pictureUrl}" alt="<td>{this.state.displayedContacts[0].name}"</td> 
             <td>{this.state.displayedContacts[0].name}</td> 
             <td>{this.state.displayedContacts[0].popularity}</td>
        )
    })
}
```

