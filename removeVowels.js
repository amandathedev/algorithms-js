const removeVowels = string => {
  let newString = "";
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      newString += string[i];
    }
  }
  return newString;
};

removeVowels("My name is Amanda.");
