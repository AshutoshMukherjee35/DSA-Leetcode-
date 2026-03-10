let n = 5
for (let i = 1; i <= n; i++) {
    let row = ''
    for (let j = i; j >= 1; j--) {
        row = row +' '+ j
    }
    console.log(row);
}
// Browser
// Console
//   1
//   2 1
//   3 2 1
//   4 3 2 1
//   5 4 3 2 1