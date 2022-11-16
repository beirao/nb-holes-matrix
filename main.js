let arr = [
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

function analyseHole(i, j) {
  arr[i][j] = 2;

  // right element
  if (i + 1 < arr.length && arr[i + 1][j] == 0) {
    analyseHole(i + 1, j);
  }

  // left element
  if (i - 1 > 0 && arr[i - 1][j] == 0) {
    analyseHole(i - 1, j);
  }

  // up element
  if (j + 1 < arr[0].length && arr[i][j + 1] == 0) {
    analyseHole(i, j + 1);
  }

  // down element
  if (i - 1 > 0 && arr[i][j - 1] == 0) {
    analyseHole(i, j - 1);
  }
}

function main() {
  let nbHoles = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) {
        nbHoles++;
        analyseHole(i, j);
      }
    }
  }

  return nbHoles;
}

const res = main();

console.log(arr);
console.log(`${res} hole(s) detected`);
