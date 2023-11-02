// DIN UPPGIFT: Definiera en index signature för Dictionary-typen samt implementera funktionerna addWord och getDefinition. / 3 poäng

type Dictionary = {
  [index: string]: string;
};

function addWord(dictionary: Dictionary, word: string, definition: string): void {
  dictionary[word] = definition;
}

function getDefinition(dictionary: Dictionary, word: string): string | undefined {
  return dictionary[word];
}

  
  // Testa funktionerna
  const myDictionary: Dictionary = {};
  addWord(myDictionary, "TypeScript", "A superset of JavaScript that adds static typing.");
  console.log(getDefinition(myDictionary, "TypeScript")); // Ska skriva ut "A superset of JavaScript that adds static typing."
  addWord(myDictionary, "JavaScript", "A dynamic programming language.");
  console.log(getDefinition(myDictionary, "JavaScript")); // Ska skriva ut "A dynamic programming language."
  console.log(getDefinition(myDictionary, "Java")); // Ska skriva ut undefined
  