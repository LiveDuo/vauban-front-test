# VAUBAN Front End Test


## Solution

##### Dependencies & Config

The projects was already configured with Vue Cli and eslint. That eslint config could have been further setup for more code consistency. Also, vue-router could have been used to demostrated a more complete and production ready project structure. For state management Vuex was used rather than Vue events for its better extensibility (with store modules) and its more universal use. The lodash library was installed for its debounce function and the Font Awesome library for the "Favourite" and "Unfavourite" icons.

##### Theme & Styling

The theme styling variables were store in a theme.scss file that lies in root directory of the project. This file allows easy access to the project global styles and it is setup with the node-sass CSS preprocessor.

##### Testing & Deployment

Most components are unit tested with vue-test-utils that was setup with Vue CLI unit testing plugin.  In many cases createLocalVue was used with a mock store, to test both the state variables that are retrieved and flow of actions that are dispatched to Vuex. The site was deployed to Github Pages for easier access with the gh-pages module and it can be found at https://liveduo.github.io/vauban-front-test/.


## Guidelines

You will build an application that allow an user to search through a list of Star Wars characters and add them to his personal list.

- Display a list of characters into nice cards with their informations
- Implement a search function that filter the list of characters
- Display the list of selected characters by the user

You will find the list of characters into **data/characters.js** file. 


You can add any other external packages if you need.

We will pay intention to the way you organize your project and how you handle interactions inside your application.
