//1

function findSecondMax(n) {
    let maxIndex = 0,
        max = n[0];
    for (let i = 1; i < n.length; i++) {
        if (n[i] > n[maxIndex]) {
            maxIndex = i;
        }
    }

    for (let l = 1; l < n.length; l++) {
        if (n[l] > max && n[l] !== n[maxIndex]) {
            max = n[l];
        }
    }

    return max;
}
console.log(findSecondMax([1, 31, 5, 6, 31, 2]));

//2
let n = [1, 2, 3, 4];
n.reverse();
console.log(n);

//3

let a = 'hi there, my name is nvard';
let b = a.split(' ');
console.log(b);
