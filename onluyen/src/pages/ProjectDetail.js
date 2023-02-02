import { projects } from "../data";


const ProjectDetail = ({ data: { id } }) => {
    const currentProject = projects.find((projects) => projects.id == id);
    if (!currentProject) return `Loading...`;
    return `<div>${currentProject.name}</div>`;
}

export default ProjectDetail;