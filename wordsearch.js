const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  console.log(horizontalJoin);
  for (line of horizontalJoin) {
      if (line.includes(word)) return true
  }
  return false;
}


module.exports = wordSearch


// Exercise
// For this challenge, you'll be implementing a word search solver, 
// as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found