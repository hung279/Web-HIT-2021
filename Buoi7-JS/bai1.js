// Bài 1
// Cho 1 mảng sau
// Đếm số lần xuất hiện của các số
// Ví dụ
// const nums = [1,1,2]
// Output:
// Số 1 xuất hiện 2 lần
// Số 2 xuất hiện 1 lần

//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

function countNum(nums) {
    let newNums = [...new Set(nums)];
    let count = newNums.map(ele => {
        return nums.filter(x => x === ele).length;
    });
    
    for (let i = 0; i < newNums.length; i++) {
        console.log(`Số ${newNums[i]} xuất hiện ${count[i]} lần`);
    }
}

console.log('Test case 1: ');
countNum(nums);
console.log('Test case 2: ');
countNum(nums1);
console.log('Test case 3: ');
countNum(nums2);
