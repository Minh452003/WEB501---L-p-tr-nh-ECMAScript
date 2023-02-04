import { router, useEffect } from "@/lib";


const AdminProjectPageAdd = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const project = {
                id: projects.length + 1,
                name: projectName.value,
                author: projectAuthor.value,
            };
            projects.push(project);

            localStorage.setItem("projects", JSON.stringify(projects));
            router.navigate("/admin/Projects");
        });

    });



    return `<div class="container">
    <form action="" id="form-add">
    <div class="form-group">
      <label for="">Tên sản phẩm</label>
      <input class="form-control" type="text" id="project-name">
    </div>
    <div class="form-group">
      <label for="">Tác giả</label>
      <input class="form-control" type="text" id="project-author">
    </div>
    <button class="btn btn-primary">Thêm dự án</button>
  </form>
  </div>`;

};

export default AdminProjectPageAdd;