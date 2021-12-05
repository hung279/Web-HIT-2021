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

const IntergerArr = (digits) => {
    let numberStr = digits.reduce((pre, cur) => {
        return pre + cur;
    }, "");
    let number = parseInt(numberStr)+1;
    return number.toString()
                .split('')
                .map(ele => +ele);
}

console.log(IntergerArr(digits1));
console.log(IntergerArr(digits2));
console.log(IntergerArr(digits3));