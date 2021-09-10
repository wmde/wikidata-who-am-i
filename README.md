# Wikidata Who am I

Guessing game using yes/no questions powered by Wikidata. Started during Ginger beer & cake event at 10th September 2021.

![Screenshot from 2021-09-10 14-41-07](https://user-images.githubusercontent.com/7815226/132860323-368f4e59-adb5-46c9-a81b-f571e4db4189.png)

## Features

Currently the game has these fancy features:

* **hidden selection** of a secret from predefined list on page reload
* display **predefined secrets** as images
* user can **enter a question** by selecting a property and entering a value (directly search wikidata)
* user can enter a SPARQL query using the **expert mode**
* query is passed on to **wikidata** and the answer is displayed
* user can enter a guess to the **solution field** that searches wikidata and checks if the answer is correct

### Nice to have
At next ginger beer and cake these could be implemented. :)

* secrets
  * allow users to enter new secrets (similar to skibbl.io)
  * make image list of secrets optional
* values
  * give examples for properties and values
  * make value depend on selected property
* enhance game mode
  * competition mode: highscore list (fastest times/least guesses)
  * multi-player mode
* create logo
* expert mode
  * include [query service](https://query.wikidata.org/) with autocomplete 
  * prevent asking for name or id in expert mode :D


## Implementation
* vue js! with components for secrets, question, answer and guess
* layouts from wmde.github.io/wikit
* hosted directly on github


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
