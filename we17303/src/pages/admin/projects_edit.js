import { useEffect, router } from "@/lib";

const ProjectsAdminEdit = ({ id }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-edit");
    const projectName = document.getElementById("project-name");
    const projectAuthor = document.getElementById("project-author");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newProject = {
        id: currentProject.id,
        name: projectName.value,
        author: projectAuthor.value,
      };
      const newProjects = projects.map((project) => {
        return project.id == newProject.id ? newProject : project;
      });

      localStorage.setItem("projects", JSON.stringify(newProjects));
      router.navigate("/admin/Projects");
    });
  });
  return `
  <div>
    <div class="container pt-5">
    <form action="" id="form-edit">
    <div class="form-group">
      <label for="">Tên sản phẩm</label>
      <input class="form-control" type="text" id="project-name" value="${currentProject.name}">
    </div>
    <div class="form-group">
      <label for="">Tác giả</label>
      <input class="form-control" type="text" id="project-author" value="${currentProject.author}">
    </div>
    <button class="btn btn-primary">Sửa dự án</button>
  </form>
  </div>
  </div>`;
};

export default ProjectsAdminEdit;

