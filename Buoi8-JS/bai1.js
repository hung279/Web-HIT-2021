// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1

const str1 = "tranduong";
const str2 = "hitclubhiuhiu";
const str3 = "aabb";

const Pos = (str) => {
    str = str.split('');
    let map = {};
    let arr = [];
    for (const char of str) map[char] = map.hasOwnProperty(char) ? ++map[char] : 1;
    
    for (const key in map) arr.push(map[key]);
    return arr.indexOf(1);
}

console.log(Pos(str1));
console.log(Pos(str2));
console.log(Pos(str3));
