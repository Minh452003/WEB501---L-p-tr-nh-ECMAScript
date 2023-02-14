import { useEffect, useState } from "@/lib";
const AdminProjectPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    const newProjects = projects.filter((project) => project.id != id);
                    setProjects(newProjects);
                })
            });
        }
    });


    return `<div class="container pt-5">
    <h1>Quản Lý Dự Án</h1>
    <div><a href="#/admin/Projects/add">Thêm sản phẩm</a></div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Tên Dự Án</th>
                <th>Tác Giả</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            ${projects.map(
        (project, index) => {
            return `
        <tr>
            <td>${index + 1}</td>
            <td>${project.name}</td>
            <td>${project.author}</td>
            <td>
                <button data-name="Minh" data-id="${project.id}" class="btn btn-danger btn-remove">Remove</button>
                <a href="/Project/${project.id}/edit">Edit</a>
            </td>
        </tr>`
        }).join("")}
        </tbody >
    </table >
    </div > `;
}

export default AdminProjectPage;