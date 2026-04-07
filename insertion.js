let arr = [5, 1, 4, 2, 9, 3];


function insertionSort(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let prev = i-1;
        let curr = a[prev + 1];

        while(a[prev] > curr ) {
            a[prev + 1] = a[prev];
            prev--;
        }
        a[prev+1] = curr;
    }
    return a;
}

console.log(insertionSort(arr))


let arr1 = [5, 1, 4, 2, 9, 3];

function insertionSort(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let prev = i - 1;
        let curr = a[i];

        while (a[prev] > curr) {
            a[prev + 1] = a[prev];
            prev--;
        }
        a[prev + 1] = curr;
    }
    return a;
}

console.log(insertionSort(arr1))