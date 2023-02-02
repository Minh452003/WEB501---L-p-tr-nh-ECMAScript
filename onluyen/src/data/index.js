const menus = [
    { id: 1, name: "Trang Chủ", link: "/" },
    { id: 2, name: "Dự Án", link: "/project" },
    { id: 3, name: "Liên Hệ", link: "/contact" },
    { id: 4, name: "Bài Viết", link: "/post" },

]

const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
    { id: 2, name: "Dự án mẫu", author: "Đạt" },
    {
        id: 2,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Hưng" },
            { id: 2, name: "Quân" },
            { id: 3, name: "Lâm" },
            { id: 4, name: "Đạt" },
        ],
    },
];
export { projects, menus };