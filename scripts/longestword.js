  //Declare sentence
  // create a function
  //split the sentence
  //intialise a variable that tracks the words individually
  //loop the individual words to iterate through the words
  //return longestword
  //console.log the function

const str = ('the', 'longest', 'word', 'in', 'my', 'sentence')
function longestWord (str) {
  const words = str.split('')
  let longest = 0
  let long

  for (let index = 0; index < words.length; index++) {
    if (words[index].length > longest) {
      longest = words[index].length
      long = words[index]
    }
  }
  return long
}

console.log(longestWord(str))
