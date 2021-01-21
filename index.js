function findAllPermutations(str) {
  let arr = []

  return find(str, 0, 3, arr);
}

function find(str, start, end, arr) {
  if (start == end - 1) {
    return str;
  }
  for (let i = start; i < end; i++) {
    str = swap(str, start, i)
    find(str, start + 1, end, arr)
    str = swap(str, start, i)
    arr.push(str)
  }

  return arr
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
