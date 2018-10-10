React + Redux + Node + MySQL application

## Installation

Run `npm install` in the projects folder to install dependencies.

##### Database configuration

`~/server/config.js` contains database configuration. Change it if is necessary.
Then run `npm run migrate` to initialize MySQL database.
You must configure the database before starting of the server.

Run `npm run serve` to run server.

Run `npm run client:dev` to run development version of React application.
Use `npm run client:prod` to build minified version of React application.
Use `npm run test` or `npm run test:watch` to run tests.

##### Requirements

To run the application you must have **Node** as well as a package manager (NPM or Yarn).
The application uses **MySQL database** so that is MySQL database an additional requirement.

## Description

Almost the whole content of the application is available only for registered users.

###### Main features of the application are:

- registration based on JWT authentication
- creating, editing and deleting posts on multiple screens
- creating, editing and deleting comments on multiple screens
- change colors palette
- easy switching in gallery mode - overview just images which published as a part of posts
- pagination of images and posts
- update of the user interface immediately after executing the change on the database
- notification

<img width="400" src="https://github.com/bogdantucovic/bogdan-react-node/blob/master/Demo/demo.gif?raw=true">
