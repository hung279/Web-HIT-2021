// Câu 2: Cộng một đơn vị vào mảng số nguyên
// Input: digits = [1,2,3]
// Output: [1,2,4]
const digits1 = [1, 2, 3];
// Input: digits = [0]
// Output: [1]
const digits2 = [0];
// Input: digits = [9]
// Output: [1,0]
const digits3 = [9];

const intergerArr = (digits) => {
    let number = parseInt(digits.join(''))+1;
    return number.toString()
                .split('')
                .map(ele => +ele);
}

console.log(intergerArr(digits1));
console.log(intergerArr(digits2));
console.log(intergerArr(digits3));