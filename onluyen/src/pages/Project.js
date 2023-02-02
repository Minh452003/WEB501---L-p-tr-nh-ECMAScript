import ProjectList from "../component/ProjectList";
import { projects } from "../data";
const Project = () => {
    return `${ProjectList({ project: projects })}`;
}

export default Project;