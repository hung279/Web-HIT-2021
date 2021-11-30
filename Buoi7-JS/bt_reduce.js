// Bài 1: Tính tổng tiền thanh toán của giỏ hàng sau
const cart = [
  {
    title: "DẾ MÈN PHIÊU LƯU KÝ",
    price: 50000,
    quantity: 2,
  },
  {
    title: "KIM ĐỒNG",
    price: 40000,
    quantity: 7,
  },
  {
    title: "NGỌN LỬA ĐÊM BA MƯƠI",
    price: 21000,
    quantity: 4,
  },
  {
    title: "CÔ BÉ GANH TỊ",
    price: 27500,
    quantity: 5,
  },
];

let result1 = cart.reduce((pre, cur) => {
  return pre + cur.price*cur.quantity;
}, 0);
console.log(`Bai1: ${result1}`);

// Bài 2: Nhóm các cầu thủ theo quốc gia
const team = [
  { name: "Công Phượng", country: "Việt Nam" },
  { name: "Ronaldo", country: "Portugal" },
  { name: "Quang Hải", country: "Việt Nam" },
  { name: "Messi", country: "Argentina" },
  { name: "Nani", country: "Portugal" },
];

let result2 = team.reduce((pre, cur) => {
  if(!pre[cur.country]) {
    pre[cur.country] = [];
  }
  pre[cur.country].push(cur);
  return pre;
}, {})

console.log("Bài 2: ");
console.log(result2);
// kết quả:
// {
//   'Việt Nam': [
//     { name: 'Công Phượng', country: 'Việt Nam' },
//     { name: 'Quang Hải', country: 'Việt Nam' }
//   ],
//   Portugal: [
//     { name: 'Ronaldo', country: 'Portugal' },
//     { name: 'Nani', country: 'Portugal' }
//   ],
//   Argentina: [ { name: 'Messi', country: 'Argentina' } ]
// }

// Bài 3: Gom các object của posts thành mảng posts
const topics = [
  {
    topic: "ReactJS",
    posts: [
      { postID: "id1", title: "title1" },
      { postID: "id2", title: "title2" },
    ],
  },
  {
    topic: "Vue.js",
    posts: [
      { postID: "id3", title: "title3" },
      { postID: "id4", title: "title4" },
    ],
  },
];

let result3 = topics.reduce((pre, cur) => {
  cur.posts.map(ele => {
    pre.push(ele);
    return pre;
  })
  return pre;
}, [])

console.log(`Bai3:
`);
console.log(result3);
// kết quả:
// [
//   { postID: 'id1', title: 'title1' },
//   { postID: 'id2', title: 'title2' },
//   { postID: 'id3', title: 'title3' },
//   { postID: 'id4', title: 'title4' }
// ]


// Bài 4: Tính tổng và tích của mảng
const arr = [49, 30, 19, 2, 29];

let total = arr.reduce((pre,cur) => {
  return pre + cur;
}, 0);

let product = arr.reduce((pre, cur) => {
  return pre*cur;
}, 1)

console.log(`Bài 4: Total = ${total} and Product = ${product}
`);

// Bài 5: Tìm phần tử khác nhau giữa 2 mảng
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

let result5 = arr1.reduce((pre, cur) => {
  return arr2.includes(cur) ? pre : [...pre, cur];
}, []);

console.log("Bài 5");
console.log(result5);

// kết quả: [1, 4, 5]

// Bài 6: Làm phẳng mảng
const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function FlatArr(arr) {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? FlatArr(cur) : cur);
  }, []);
}

console.log("Bài 6: ");
console.log(FlatArr(arrFlat));



// Bài 7: Đến số lần xuất hiện các phần tử trong mảng
const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];

let result7 = arrCount.reduce((pre, cur) => {
  if (!pre[cur]) {
    pre[cur] = 0;
  }
  pre[cur]++;
  return pre;
}, {})

console.log("Bài 7: ")
console.log(result7);
// kết quả: { '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '7': 1, '8': 2 }
