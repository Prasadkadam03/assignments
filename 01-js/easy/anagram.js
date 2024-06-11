/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let result = false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr2 = Array.from(str2);
  let arr1 = Array.from(str1);
  let check = false;
  if (arr1.length == arr2.length){

    for(let i = 0; i < arr1.length ; i++) {

      let index = arr1[i];
      for(let j = 0; j < arr2.length ; j++) {
          if(index == arr2[j]){
            check = true;
            break;
          }
      }
      if(check == true){
        arr1.splice(i , 1);
        check = false;
      }
      else{
        return result;
      }
    }
    result = true;

  }
  
  return result;
}

module.exports = isAnagram;
