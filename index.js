function findAllPermutations(str) {
  let arr = []
  console.log(find(str, 0, str.length))

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
  }
}

function swap(str, start, current) {
  let k = str.split("")
  let ch;

  ch = k[start]
  k[start] = b[current]
  b[current] = ch;

  return k.join("")
}

console.log(findAllPermutations("abc"))
