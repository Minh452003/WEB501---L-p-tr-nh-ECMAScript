const person = {
  name: "Minh",
  age: 19,
};
const person2 = {
  ...person,
  address: "Yên Bài,Ba Vì",
};


console.log(person2);

const products = [10, 20, 30];
const newProducts = [...products, 40];
console.log("Products: ", products);
console.log("New Products: ", newProducts);