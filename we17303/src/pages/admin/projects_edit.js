import { useEffect, router, useState } from "@/lib";

const ProjectsAdminEdit = ({ id }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-edit");
    const projectName = document.getElementById("project-name");
    const projectAuthor = document.getElementById("project-author");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        id: id,
        name: projectName.value,
        author: projectAuthor.value,
      };
      fetch(`http://localhost:3000/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/Projects"));
    });



  });
  return `
  <div>
    <div class="container pt-5">
    <form action="" id="form-edit">
    <div class="form-group">
      <label for="">Tên sản phẩm</label>
      <input class="form-control" type="text" id="project-name" value="${projects.name}">
    </div>
    <div class="form-group">
      <label for="">Tác giả</label>
      <input class="form-control" type="text" id="project-author" value="${projects.author}">
    </div>
    <button class="btn btn-primary">Sửa dự án</button>
  </form>
  </div>
  </div>`;
};

export default ProjectsAdminEdit;

