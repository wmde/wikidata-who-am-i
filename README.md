# Wikidata Who am I

Guessing game using yes/no questions powered by Wikidata. Started during Ginger beer & cake event at 10th September 2021.

![Screenshot from 2021-09-10 14-41-07](https://user-images.githubusercontent.com/7815226/132860323-368f4e59-adb5-46c9-a81b-f571e4db4189.png)

## Features
* hidden selection of a secret from predefined list on page reload
* display predefined secrets as images
* user can enter a question by selecting a property from a predefined list and entering a value (also predefined)
* user can enter a SPARQL query using the expert mode
* query is passed on to wikidata and the answer is displayed
* solution field that searches wikidata and checks if the answer is correct

### Nice to have
secrets
* auto generate a list of secrets by category (?) 
* allow users to enter new secrets (similar to skibbl.io)
* make image list of secrets optional

values
* make value depend on selected property
* more flexible selector (all available items in wikidata)

enhance game mode
* competition mode: highscore list (fastest times/least guesses)
* multi-player mode

create logo

expert mode
* include query service with autocomplete 
* prevent asking for name or id in expert mode :D


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
