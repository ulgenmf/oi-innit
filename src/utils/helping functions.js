function getRandomErrorSentence() {
  const errorSentences = [
    "Oops, something went wrong.",
    "Sorry, an error occurred.",
    "Apologies, there was an error.",
    "Uh-oh, an error occurred.",
    "My apologies, there was a problem.",
    "Error encountered.",
    "Oops! Error.",
    "Sorry, something went awry.",
    "Apologies, an error happened.",
    "Uh-oh, something went wrong.",
    "Error. Please try again.",
    "Oops, an error occurred.",
    "Sorry, something went off track.",
    "Apologies, something broke.",
    "Uh-oh, something went haywire.",
    "Error. Please refresh the page.",
    "Oops, something didn't work.",
    "Sorry, something messed up.",
    "Apologies, a glitch occurred.",
    "Uh-oh, something went sideways.",
    "Error. Try again later.",
    "Oops! That didn't work.",
    "Sorry, an issue occurred.",
    "Apologies, a hiccup happened.",
    "Uh-oh, something's not right.",
    "Error detected. Retry.",
    "Oops, a glitch appeared.",
    "Sorry, something malfunctioned.",
    "Apologies, a fault occurred.",
    "Uh-oh, a snag happened.",
    "Error. Check your input.",
    "Oops, an issue arose.",
    "Sorry, a problem occurred.",
    "Apologies, something failed.",
    "Uh-oh, a malfunction occurred.",
    "Error. Please check again.",
    "Oops, something's amiss.",
    "Sorry, an error cropped up.",
    "Apologies, something went astray.",
    "Uh-oh, an anomaly occurred.",
    "Error. Try a different approach.",
    "Oops! Unexpected error.",
    "Sorry, an unexpected glitch.",
    "Apologies, an anomaly happened.",
    "Uh-oh, a blip on the radar.",
    "Error. Please report this.",
    "Oops, something unexpected.",
    "Sorry, an irregularity occurred.",
    "Apologies, an unanticipated error.",
    "Uh-oh, a deviation occurred.",
    "Error. Investigating the issue.",
  ];

  const randomIndex = Math.floor(Math.random() * errorSentences.length);
  return errorSentences[randomIndex];
}

// Example usage:
export const randomError = getRandomErrorSentence();



export function GetFirstWord(sentence){
let words = sentence.split(' ');
let firstWord = words[0];
return firstWord
}