function secondLargest(arr) {
    let fl, sl;

    if (arr[0] > arr[1]) {
        fl = arr[0];
        sl = arr[1];
    } else {
        fl = arr[1];
        sl = arr[2];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > fl) {
            sl = fl;
            fl = arr[i];
        } else if (arr[i] > sl && sl !== fl) {
            sl = arr[i]
        }
    }
    return sl;
}
console.log(secondLargest([4,9,0,2,8,7,1]))