const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function sum2DArray(arr, ind) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length > ind) {
            setTimeout(() => {
                if(arr[ind].filter(e => {
                    return e<0;
                }).length > 0) {
                    console.log('resolving ... ');
                    resolve(ind);
                }
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Row index is out of bounds!');
        }
        console.log('returning from sum');
    });
}

const rowProms = [];
for(let i=0;i<array2D.length;i++) {
    rowProms.push(sum2DArray(array2D, i));
}

Promise.any(rowProms).then((res) => {
    console.log(res);
}) .catch(err => console.log(err));
