//1.Valid Anagram
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("are", "ear");
validAnagram("test", "tfgr");
validAnagram("navan", "navan");

//2.Anagram
function checkAnagram(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }
  let str1 = w1.split("").sort().join("");
  let str2 = w2.split("").sort().join("");
  console.log(str1, str2);

  if (str1 === str2) {
    return "isAnagram";
  } else {
    return "notAnagram";
  }
}

//3.Anagram
function isanaGram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let j = 0; j < second.length; j++) {
    letter = second[j];
    if (!lookup[letter]) return false;
    else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup);
  return true;
}
isanaGram("ear", "are");

console.log(checkAnagram("amir", "rima"));

//================================\\

//2.Character Count
function charCount(str) {
  //make obj to return at end
  var result = {};
  //loop over the string
  for (var i = 1; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  console.log(result["l"]);
  return result;
  //if the char is no/lett/ And is a key in object add one to count
}
console.log(charCount("ttete44sting"));

//================================\\

//3.Fibanocci
//1.
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

//2.

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

//4. factorial
//1.
function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));

//2.
function facto(n) {
  let fact = 1;
  for (i = 1; i <= 5; i++) {
    fact *= i;
  }
  console.log("'factorial" + fact);
  return fact;
}
facto(5);

//================================\\

// 5.checking squares
function same(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i] * arr1[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 5, 3], [9, 4, 9]));
