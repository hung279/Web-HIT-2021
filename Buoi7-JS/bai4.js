// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

const regEmail = /[a-zA-Z0-9]+@[a-z0-9]{2,}(\.[a-z]{2,3}){1,}/g;

const resultEmail = (textEmail) => textEmail.match(regEmail);

console.log(resultEmail(textEmail).join(", "));

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex

const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

const regPhone = /0\d{9}/g;

const resultPhone = (textPhone) => textPhone.match(regPhone);

console.log(resultPhone(textPhone).join(", "));
