const wordTypesMap = {
    // previous wordTypesMap content...

    'casualGreetingWord': ['Hey there you!', 'What\'s happening?', 'How’s it going?', 'Yo!', 'What’s new?', 'Hiya!', 'How have you been?', 'Long time no see!', 'Nice to see you again!', 'How’s everything with you?', 'Been up to anything fun?'],
    'stateObjects': ['are', 'is', 'have been', 'were', 'have you been', 'is everything', 'is anything', 'has anything', 'are you', 'is anyone', 'was'],
    'formalGreetingWord': ['Greetings', 'Good day', 'Good evening', 'Pleasure to meet you', 'Hello, how do you do?', 'It’s a pleasure to make your acquaintance', 'Good morning to you', 'Good afternoon'],
    'politeGreetingWord': ['Hola', 'Salutations', 'Pleased to make your acquaintance', 'Good day to you', 'Hello, sir', 'How are you doing today?', 'May I ask how you are doing?'],
    'enthusiasticGreetingWord': ['Hey everyone!', 'Hello, world!', 'Great to see you!', 'Howdy, folks!', 'Wonderful day!', 'So happy to see you!', 'Hope you’re having a fantastic day!', 'Amazing to see you again!'],
    'questionWord': ['how', 'what', 'is', 'up', 'happening', 'new', 'are', 'today', 'now', 'doing', 'feeling', 'understand', 'accomplishing', 'experiencing', 'have', 'has', 'where', 'when', 'who', 'why', 'which', 'whom'],
    'secondPersonPronoun': ['you', 'yourself', 'yourselves', 'your day', 'your life', 'your plans', 'your experience', 'your thoughts', 'your feelings', 'your achievements', 'your endeavors'],
    'appreciativeWord': ['Good', 'Terrific', 'Excellent', 'Marvelous', 'Splendid', 'Fantastic', 'Outstanding', 'Superb', 'Brilliant', 'Impressive', 'Remarkable'],
    'dayGreeting': ['morning', 'afternoon', 'evening', 'night', 'day', 'noon', 'twilight', 'dusk', 'sunrise', 'sunset', 'daybreak'],
    'title': ['sir', 'madam', 'miss', 'mister', 'lady', 'gentleman', 'comrade', 'friend', 'colleague', 'partner', 'esteemed'],
    'complimentaryTitle': ['champ', 'sunshine', 'amigo', 'friend', 'pal', 'buddy', 'partner', 'comrade', 'superstar', 'rockstar', 'legend', 'hero', 'ace'],
    'topOfThe': ['Top of the', 'Top o\' the', 'Top o\'', 'Peak of the', 'Summit of the'],
    'and': ['and', 'and also', 'as well as', 'together with'],
    'verb': ['met', 'encountered', 'greeted', 'seen', 'encountered', 'acknowledged', 'welcomed', 'accomplished', 'experienced', 'had', 'shared', 'discussed', 'planned', 'thought', 'said'],
    'aName': ['Nigel','John','Justin'],

    'casualGreetingSentence': ['Hey there, how’s it going? I haven’t seen you in ages!', 'What’s new with you? Anything exciting happening lately?', 'Hiya, feeling good today? Let’s catch up!'],
    'formalGreetingSentence': ['Greetings, good sir. I hope this message finds you well.', 'Good day to you, madam. Your presence brightens the day.', 'Pleasure to meet you. Your reputation precedes you.'],
    'enthusiasticGreetingSentence': ['Hey everyone! Having a fantastic day? The weather is perfect for some outdoor activities!', 'Hello, world! Feeling wonderful today? Ready to conquer the day!', 'Great to see you! Your smile always brings positivity.'],
    'questionSentence': ['How are you today? I hope everything is going smoothly for you.', 'What’s happening now? Anything interesting going on in your world?', 'Is everything going well? Feel free to share if something’s on your mind.', 'What are you feeling? Need any advice or a listening ear?'],
    'complimentaryTitleSentence': ['You’re doing great, champ! Your dedication is truly admirable.', 'Hello, superstar! Your talent shines brighter each day.', 'Well done, buddy! Your efforts never go unnoticed.'],
'definations': ['A ', 'Definition:', 'Meaning:', 'Interpretation:', 'Explanation:', 'refers to', 'is defined as', 'is characterized by', 'is explained as', 'describes', 'denotes', 'in other words', 'can be described as', 'can be defined as', 'defined by', 'expresses', 'signifies', 'is termed as', 'implies', 'encompasses', 'represents', 'stands for'],
'informative_sentences': ['The',/^(?=.*\bThe\b)(?=.*\bof\b).*$/, 'This', 'may', 'will', 'what happens is', 'Therefore,', 'Hence,', 'Consequently,', 'As a result,', 'In conclusion,', 'In ', 'This leads to,', 'In essence,', 'Thus,', 'In summary,', 'For instance,', 'To illustrate,', 'So,', 'As such,', 'In light of this,', 'This implies that,', 'In effect,', 'One possible outcome is,', 'if,', 'when,', 'while,', 'although,', 'Moreover,', 'Furthermore,', 'However,', 'Additionally,', 'On the other hand,', 'In contrast,', 'In addition to,', 'To summarize,', 'Not only that,', 'Another aspect is,', 'Considering,', 'Given that,', 'As a consequence,', 'In a similar fashion,', 'Please note that', 'This will', 'Let me clarify,', 'Allow me to explain,', 'Put simply,', 'To put it differently,', 'In a broader sense,'],
    'gptResponsesAgreeing': ['Yes, ', 'Certainly! ', 'Absolutely! ', 'Absolutely, ', 'Sure, ', 'Indeed, ', 'Definitely, ', 'Of course, ', 'Without a doubt, ', 'That\'s right, ', 'You\'re correct, '],
    'gptResponsesSuggestion': ['You can ', 'Adjust ', 'you can ', 'For more ', 'Consider ', 'Try ', 'Explore ', 'Experiment with ', 'Take a look at ', 'Check out ', 'Give a try to ', 'Test out ', 'Take into account ', 'Think about ', 'Take a moment to ', 'Delve into ', 'Look into ', 'Consider trying ', 'Investigate '],
    'gptResponsesUnderstanding': ['I understand, ', 'I get it, ', 'I comprehend, ', 'I see, ', 'I grasp, ', 'I follow, ', 'I\'m with you, ', 'Got it, ', 'More, '],
    'phoneNumberUK': [/(?:(?:\+44\s?(?:\d{10}|\d{4}\s?\d{4}\s?\d{2}|\d{3}\s?\d{3}\s?\d{4}|\d{2}\s?\d{4}\s?\d{4}))|(?:0\s?(?:\d{10}|\d{5}\s?\d{6}|\d{4}\s?\d{4}\s?\d{2}|\d{3}\s?\d{3}\s?\d{4}|\d{2}\s?\d{4}\s?\d{4})))\b/,/447\d{9}/,/\+44\d{9}/


],
'postCode' : [/(\b([Gg][Ii][Rr] 0[Aa]{2})|(([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})\b/],
'roadName' : [/\b\d{1,6} +.{2,25}\b(avenue|ave|court|ct|street|st|drive|dr|lane|ln|road|rd|blvd|plaza|parkway|pkwy)[.,]?(.{0,25} +\b\d{5}\b)?/]


// ... rest of the code remains the same ...

    //'phoneNumberUK':['44','07']
};


function mregex(...wordTypes) {
  const regexParts = wordTypes.map(type => {
    if (Array.isArray(wordTypesMap[type])) {
      const phrases = wordTypesMap[type].map(phrase => {
        if (typeof phrase === 'string') {
          return phrase.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // Escape special characters
        } else if (phrase instanceof RegExp) {
          return phrase.source; // Use the regex source directly
        } else {
          return phrase; // Handle other cases (e.g., plain string or other types)
        }
      });
      return phrases.join('|');
    } else if (typeof wordTypesMap[type] === 'object' && wordTypesMap[type] instanceof RegExp) {
      return wordTypesMap[type].source; // Use the regex source directly
    } else {
      return wordTypesMap[type].join('|');
    }
  });

  const firstElementRegex = `\\b(${regexParts[0]})\\b`;
  const restOfElementsRegex = `(${regexParts.slice(1).join('|\\s*')})`; // Use \s* for optional spaces

  return new RegExp(`(${firstElementRegex}|${restOfElementsRegex})`, 'g'); // Global flag for all matches
}




function matchTextWithRegex(text, regex) {
  const matches = text.match(regex);
  return matches ? matches.filter(Boolean) : [];
}




function performAction(input, actions) {
    function performCustomAction(actionType, filter, wordTypes, text) {
        switch (actionType) {
            case 'count':
                const regex = mregex(...wordTypes);
                const matches = matchTextWithRegex(text, regex);
                return `Number of matched words: ${matches.length}`;
            case 'get':
                const specificRegex = mregex(...wordTypes);
                const specificMatches = matchTextWithRegex(text, specificRegex);
                return specificMatches.length > 0 ? `First match found: ${specificMatches[0]}` : "No match found!";
            case 'get all':
                const allRegex = mregex(...wordTypes);
                let allMatches = matchTextWithRegex(text, allRegex);
                if(filter.includes("includes")){
                    var incFilter = filter.split(" ")
                //alert(incFilter[incFilter.length-1])

allMatches.forEach(matchesLoop);
function matchesLoop(item,index){
    if(item.includes(incFilter[incFilter.length-1])){
          allMatches = allMatches.filter(chosen => chosen == item); //alert(filteredArr); // [1, 3]
        //alert(item)
    }
}



                }
                return allMatches && allMatches.length > 0 ? `All matches found: ${allMatches.join(', ')}` : "No matches found!";
            case 'replace':
                if (wordTypes.length !== 2) return "Replace action requires two word types.";
                const replaceRegex = mregex(wordTypes[0]);
                const replacedText = text.replace(replaceRegex, wordTypes[1]);
                return replacedText !== text ? `Text after replacement: ${replacedText}` : "No match found for replacement!";
// ... (inside performCustomAction function)

case 'find sentences':

function getSentencesByWordTypeFromMapInParagraph(paragraph, wordType) {
    const words = wordTypesMap[wordType];
    const matchingSentences = [];

    words.forEach(word => {
        const regex = word instanceof RegExp ? word : new RegExp(`\\b${word}\\b`, 'g'); // Use regex directly if it's provided
        const matches = paragraph.match(regex);

        if (matches) {
            matches.forEach(match => {
                const index = paragraph.indexOf(match);
                const sentenceStart = paragraph.lastIndexOf('.', index) + 1;
                const sentenceEnd = paragraph.indexOf('.', index + match.length) + 1 || paragraph.length;
                const sentence = paragraph.substring(sentenceStart, sentenceEnd).trim();
                
                if (!matchingSentences.includes(sentence)) {
                    matchingSentences.push(sentence);
                }
            });
        }
    });

    return matchingSentences;
}


// Example usage:
//alert(wordTypes[0])
const definationSentencesInParagraph = getSentencesByWordTypeFromMapInParagraph(input, wordTypes[0]);
//alert(definationSentencesInParagraph)

return definationSentencesInParagraph

            // Add more actions as needed...
            default:
                return "No valid action detected.";
        }
    }

    const actionResponses = [];
    actions.forEach(action => {
        const actionParts = action.split(' ');
        
        
                        // Input string
const inputString = action

// Variable to store matched key
let matchedKey = '';

// Loop through the keys in wordTypesMap
for (const wordType in wordTypesMap) {
    if (action.includes(wordType)) {
        matchedKey = wordType
        //alert(wordType)
        break; // If a match is found, exit the loop
    }
}

        const wordTypes = [matchedKey]; 
        const actionType = action.split(matchedKey);
        
        actionResponses.push(performCustomAction(actionType[0].trim(), actionType[1].trim(), wordTypes, input));
    });

    return actionResponses;
}


const userInput = "Hey there you! How’s it going? What’s new, sir my friend? Hiya! Nice to see you! I am a partner . What are you.  What do you do. What is your job. I am with sir. it is evening time. It could be morning time. Actually maybe it is afternoon time. My name is Nigel. I am called Nigel. Your real name is Johnny. Few things make Mediators more uneasy than pretending to be who they are not. I started work. I departed. I made my first drop off. I made my first stop.  I made my last stop. You are a chatbot. You were created by the MakerPlus lab team. MakerPlus lab team is a dope Ai team on Discord. A Mediator (INFP)Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.Although they may seem quiet or unassuming, Mediators (INFPs) have vibrant, passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. These personalities are known for their sensitivity – Mediators can have profound emotional responses to music, art, nature, and the people around them. Idealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others. But because this personality type makes up such a small portion of the population, Mediators may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique.The Direct Debit account holder will get an email from DVLA if a payment fails because there is not enough money in the account. DVLA will try to take the payment again within 4 working days. If that also fails, you'll get an email telling you that: the Direct Debit has failed twice and has been permanently cancelled. Certainly! Stemming in natural language processing refers to the process of reducing words to their root or base form. Here's an example of a basic stemming function in JavaScript using a simple rule-based approach:. This function stemWord takes a word as input and removes the character 's' from the end of the word if it ends with 's' and is longer than one character. This is a very simplistic stemming method and might not cover various language-specific or more complex cases encountered in natural language processing. For more advanced stemming techniques, libraries like Natural, Snowball, or Porter Stemmer might be more suitable. For instance, using the Natural library, you could use the PorterStemmer: 07803290142. 447803240242. +441234567890. This has Nn188pq. nn18 8pu.";
const actions = [
    "get phoneNumberUK",
    "get all postCode",
    "count phoneNumberUK",
    "find sentences gptResponsesAgreeing",
    "find sentences phoneNumberUK"
];
const actionResponses = performAction(userInput, actions);
alert(actionResponses.join('\n'));