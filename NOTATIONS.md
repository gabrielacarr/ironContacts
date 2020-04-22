![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronContacts | BRIE NOTATIONS & GUIDELINES

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
### How do we get there? What's the thought process?

Steps for completing the Iteration 1

- FIRST, What do you have from the instructions

```
 Impport producer's contacts from contacts.json into App.js
 Using DevTools, what can we determine is inside the contacts.json file?
 The console reflects that the contacts.json file is an array with 199 contacts
 Which holds objects that contain the following four properties: 
 name, pictureUrl, popularity, and id

```






