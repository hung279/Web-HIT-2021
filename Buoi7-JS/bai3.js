// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

const standardized = (str) => {
    str = str.trim().toLowerCase();
    str = str.replace(/\d/g, '');
    str = str.replace(/\s+/g, ' ');
    const newStr = str.split(' ').map(ele => {
        return ele.charAt(0).toUpperCase()+ele.slice(1);
    }).join(' ');
    return newStr
}
console.log(standardized(case1));
console.log(standardized(case2));
console.log(standardized(case3));