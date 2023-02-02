import Header from "../component/Header";
const Home = () => {
  return `
    ${Header()}
    <h1 style="color:red;padding-left:600px;">Trang Chủ</h1>
    <li><a href="/project">Project</a></li>
    <li><a href="/post">Post</a></li>
    `;
}
export default Home;