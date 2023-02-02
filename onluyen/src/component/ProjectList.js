const ProjectList = ({ projects }) => {
    if (!Array.isArray(projects) || projects.length == 0) return null;
    return `
    ${projects
            .map((item) => {
                return `<div><a href="/Project/${item.id}">${item.name}</div>`;
            })
            .join("")}
    
    `;
};

export default ProjectList;
