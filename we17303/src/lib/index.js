// const sum = (a, b) => {
//     return a + b;
// }
// const show = () => {
//     return `Phùng Quang Minh`;
// }
// const Demo = () => {
//     return "ALO!";
// }
// export { sum, show };
// export default Demo;

import Navigo from "navigo";
const router = new Navigo("/", { hash: true, linksSelector: "a" });


const render = (content, container) => {
    container.innerHTML = content();
}
export { render, router };