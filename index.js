function findAllPermutations(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    let e = str[i];
    console.log(str[i] + str.substring(0, i) + str.substring(i + 1, str.length))
  }

  return arr;
}

console.log(findAllPermutations("abc"))
