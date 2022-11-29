# Matic logical test

This is the test of logic exercises for the vacancy as frontend developer for Matic.io company. 

In this repository you can validate the logic of the exercises and at the same time my skills as a React developer, the unit tests are made with Jest.

For the composition and validation of the unit tests I decided to create the components of the functions in separate folders, which contain 3 files, one in which is the function requested for the tests, the .test file for the unit validations and the jsx component for rendering in the graphical interface.
 
``` 
 components
├── FibonacciSequence
│   ├── FibonacciSequence.js
│   ├── FibonacciSequence.test.js
│   └── index.jsx
├── FizzBuzz
│   ├── FizzBuzz.js
│   ├── FizzBuzz.test.js
│   └── index.jsx
└── RepetitionsWords
    ├── RepetitionsWords.js
    ├── RepetitionsWords.test.js
    ├── index.jsx
```
    
To run the project you need to install the dependency packages with 

```
npm install
```

Once the dependencies are installed you can run the project with 

```
npm run start.
```

By default will come the values indicated in the test document to verify its functionality, these values can be edited to validate other values and confirm the use of the function.

For unit tests you can use the command.

```
npm run test
```

The design of the model was based on the styles and colors of the brand. Here is the link to the [Figma](https://www.figma.com/file/M9wn1ZWGmM6b9J9xQ33bmP/Matic-logic-test-UI?node-id=0%3A1&t=P9xJCmqRipREOKJT-1) for you to appreciate.


