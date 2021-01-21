function findAllPermutations(str) {
  return find(str, 0, str.length, []);
}

function find(str, start, end, arr) {
  if (start == end - 1) {
    return str;
  }

  for (let i = start; i < end; i++) {
    console.log(str)
    str = swap(str, start, i)
    find(str, start + 1, end, arr)
    console.log(str, "\n")
    let x = arr.filter(e => e == str)
    if (x.length > 0) continue
    arr.push(str)

    console.log("added,", str)
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
