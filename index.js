function findAllPermutations(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    let e = str[i];
    console.log(e + str.substring(0, i) + str.substring(i + 1, str.length))
  }

  return arr;
}

function swap(str, i, j) {
  let k = str.split("")
  let ch;

  ch = k[i]
  k[i] = b[j]
  b[j] = ch;

  return k.join("")
}

console.log(findAllPermutations("abc"))
