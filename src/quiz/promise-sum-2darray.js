function sum2DArray(arr, ind) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length > ind) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[ind].length; j++) {
                    sum += arr[ind][j];
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Row index is out of bounds!');
        }
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function main() {
   try{
    const rowProms = [];
    for(let i=0;i<array2D.length;i++) {
        const res = await sum2DArray(array2D, i);
        rowProms.push(res);
    }

    let sum = 0;
    rowProms.forEach((res) => {
        sum += res;
    });
    console.log(`Sum = ${sum}`);
   }
   catch(err) {
    console.log(err);
   }
}

main();
