import ProjectList from "../component/ProjectList";
import { projectsFake } from "../data";
const ProJect = () => {
    return `
    ${ProjectList({ projects: projectsFake })}`;

};
export default ProJect;