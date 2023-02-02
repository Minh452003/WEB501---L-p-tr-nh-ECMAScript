let productList = [
    { id: 1, name: "Phùng Quang Minh", price: 3000 },
    { id: 1, name: "Dương Đức Duy ", price: 2000 },
    { id: 1, name: "Nguyễn Thành Văn", price: 1000 },
];
const app = document.querySelector("#app");

// const showProducts = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     for (let i = 0; i < data.length; i++) {
//         result += `<div>${data[i].name}</div>`;
//     }
//     return result;
// }

// const showProducts = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     for (let i in data) {
//         result += `<div>${data[i].name}</div>`;
//     }
//     return result;
// }

// const showProducts = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     for (let i of data) {
//         result += `<div>${i.name}</div>`;
//     }
//     return result;
// }

const showProducts = (data) => {
    if (!Array.isArray(data)) return "";
    let result = "";
    data.forEach((item, index) => {
        result += `<div>${item.name} - ${index}</div>`;
    })
    return result;
}

if (app) {
    app.innerHTML = showProducts(productList);
}