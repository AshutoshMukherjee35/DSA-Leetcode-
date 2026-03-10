let n = 5
for (let i = n; i >= 1; i--) {
    let row = ''
    for (let j = 1; j <= i; j++) {
        row = row + ' ' + i;
    }
    console.log(row);
}


// Browser
// Console
//   5 5 5 5 5
//   4 4 4 4
//   3 3 3
//   2 2
//   1