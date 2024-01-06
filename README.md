# MAI-Extract

This code is a JavaScript function that helps analyze and extract text based on predefined word types. It includes functions like `mregex` to create regex patterns for matching, `matchTextWithRegex` to find matches in text using regex, and `performAction` to perform specific actions based on user input.

To use it:

1. **Define the word types**: The `wordTypesMap` object holds various word types like greetings, verbs, titles, etc., each containing an array of relevant words or phrases.

2. **Create a regex pattern**: `mregex` generates a regex pattern based on the specified word types.

3. **Perform actions**: `performAction` takes user input and an array of actions. Actions can include counting matches, getting matches, replacing text, finding sentences related to specific word types, etc.

Example usage: 

```javascript
const userInput = "Hey there you! How’s it going? What’s new, sir my friend? Hiya! Nice to see you!";
const actions = [
    "get casualGreetingWord",
    "count title",
    "find sentences gptResponsesAgreeing"
    // Add more actions as needed
];

const actionResponses = performAction(userInput, actions);
console.log(actionResponses.join('\n'));
```

This example takes a user input and performs actions like getting casual greeting words, counting titles, and finding sentences related to agreeing GPT responses if any is in the input.

In essence you could use it to extract specifuc information from chatGPT and other sources.
