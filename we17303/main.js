// import Demo, { sum, show } from "./lib";
// console.log(sum(10, 20));
// console.log(show());
// console.log(Demo());

import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./src/lib";
import AboutPage from "./src/pages/aboutpage";
import Contact from "./src/pages/contact";
import Home from "./src/pages/home";
import Notfound from "./src/pages/notfound";
import Post from "./src/pages/post";
import PostDetail from "./src/pages/post-detail";
import ProJect from "./src/pages/project";
import ProjectDetailPage from "./src/pages/project-detail";

const app = document.querySelector("#app");

router.on("/", () => render(Home, app));
router.on("/aboutpage", () => render(AboutPage, app));
router.on("/contact", () => render(Contact, app));
router.on("/post", () => render(Post, app));
router.on("/project", () => render(ProJect, app));
router.on("/project/:id", (params) => render(() => ProjectDetailPage(params), app));
router.on("/post/:id", () => render(PostDetail, app));
router.notFound(() => render(Notfound, app));
router.resolve();
