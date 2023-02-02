import Header from "../component/Header";
import { projectsFake } from "../data";
const ProjectDetailPage = ({ data: { id } }) => {
    const currentProject = projectsFake.find((project) => project.id == id);
    if (!currentProject) return "Loading...";
    return `
        ${Header()}
        <h1>${currentProject.name}</h1>
        `;
};

export default ProjectDetailPage;