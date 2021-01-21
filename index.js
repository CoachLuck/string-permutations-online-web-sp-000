function findAllPermutations(str) {
  let arr = []
  find(str, 0, 3)
  return arr;
}

function find(str, start, end) {
  if (start == end - 1) {
    return str;
  }
  for (let i = start; i < end; i++) {
    str = swap(str, start, i)
    find(str, start + 1, end)
    str = swap(str, start, i)
    console.log(str)
  }
}

function swap(str, start, current) {
  let k = str.split("")
  let ch;

  ch = k[start]
  k[start] = k[current]
  k[current] = ch;

  return k.join("")
}

console.log(findAllPermutations("abc"))
