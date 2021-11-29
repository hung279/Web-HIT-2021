// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];


function show(users) {
    users.forEach(element => {
        console.log(element);
    });
}

//thêm user
function addUser(users, newUser) {
    users.push(newUser);
}

//Xóa user bằng id
function deleteUserById(users, id) {
    let user = users.find((element) => {
        return element.id === id;
    });
    if(user === undefined) {
        console.log("ID delete is invalid");
        return;
    }
    users.splice(users.indexOf(user), 1);
    console.log('Delete successful');
    show(users);
    
}

//sửa user qua id
function updateUserByID(users, id) {
    const newUser = {id: id, name: 'Thanh Nien', age: 18, gender: 'male', money: 1000};
    let newUsers = [];
    let user = users.find((element) => {
        return element.id === id;
    });
    if(user === undefined) {
        console.log("ID update is invalid");
        return;
    }
    newUsers = users.map(element => {
        if (element.id === id) {
            element = newUser;
        }
        return element;
    });
    console.log('Update successful');
    show(newUsers);
}

//Số lượng user là nam và trên 15 tuổi
function countMaleAndOverAge15(users) {
    let listUsers = users.filter(element => {
        return element.gender = 'male' && element.age > 15;
    })
    console.log(`There are ${listUsers.length} people who are male and over 15 years old`);
}

//tổng tiền user có id chẵn
function totalMoneyIDEven(users) {
    let totalMoney = users.reduce((pre, cur) => {
        return (cur.id % 2 == 0) ? pre+cur.money : pre;
    }, 0)
    console.log(`Total of money's even ID: ${totalMoney}`);
}

//tìm người giàu nhất và nghèo nhất
function isPoorAndRich(users) {
    let max = Math.max(...users.map(element => element.money));
    let min = Math.min(...users.map(element => element.money)); 
    users.forEach(element => {
        if (element.money === max) {
            console.log(`${element.name} is rich`);
        }
        if (element.money === min) {
            console.log(`${element.name} is poor`);
        }
    })
}

//hoán đổi giới tính thành female
function convertGender(users) {
    users.map(element => {
        element.gender = 'female';
        return element;
    });
}

const newUser1 = {
    id: 5, name: "Tan Hung", age: 19, gender: "male", money: 10000
}

const newUser2 = {
    id: 6, name: "Maria O", age: 20, gender: "female", money: 1400
}

//1.delete and update
deleteUserById(users, 4);
updateUserByID(users, 2);
//2
addUser(users, newUser1);
addUser(users, newUser2);
console.log('Add 2 persons successful');
show(users);
countMaleAndOverAge15(users);
totalMoneyIDEven(users);
isPoorAndRich(users);
//3
console.log('Convert gender successful. Everyone is female');
convertGender(users);
show(users);

