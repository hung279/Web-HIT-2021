// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

function standardized(str) {
    str = str.trim().toLowerCase();//xóa khoảng trắng, viết thường
    str = str.replace(/\d/g, '');// xóa ký tự số
    str = str.replace(/\s+/g, ' ');// xóa khoảng trắng ở giữa
    str = str.split(' ').map(ele => {
        return ele.charAt(0).toUpperCase()+ele.slice(1); //viết hoa chữ cái đầu sau khoảng trắng
    }).join(' ');
    return str;
}
console.log(standardized(case1));
console.log(standardized(case2));
console.log(standardized(case3));