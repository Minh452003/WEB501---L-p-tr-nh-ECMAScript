import Home from "./src/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { render, route } from "./src/lib";
import NotFound from "./src/pages/NotFound";
import Project from "./src/pages/Project";
import ProjectDetail from "./src/pages/ProjectDetail";


const app = document.querySelector("#app");

route.on("/", () => render(Home, app));
route.on("/Project", () => render(Project, app));
route.on("/Project/:id", (params) => render(() => (ProjectDetail(params), app)));
route.notFound(() => render(NotFound, app));
route.resolve();
