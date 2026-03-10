let n = 5
for (let i = 1; i <= n; i++) {
    let row = ''
    for (let j = n-i; j >= 0; j--) {
        row = row + ' ';
    }
    for (let k = 1; k <= i; k++) {
        row =  row + '*';
    }
    console.log(row);
}

// Browser
// Console
//       *
//      **
//     ***
//    ****
//   *****