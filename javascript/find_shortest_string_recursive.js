function findShortestStringRecursive(arr, shortestStr = arr[0]) {
  // type your code here
  if (arr.length === 0) {
    return shortestStr;
  }

  arr[0].length < shortestStr.length 
    ? findShortestStringRecursive(arr.splice(1), arr[0])
    : findShortestStringRecursive(arr.splice(1), shortestStr);
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
