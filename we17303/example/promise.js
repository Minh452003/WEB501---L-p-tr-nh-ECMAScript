function LoadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = function () {
            resolve(script);
        };
        script.onerror = function () {
            reject(new Error("Lỗi rồi!!!!!!!!"));
        };
        document.head.append(script);
    });
};
LoadScript("https://github.com/").then((data) => console.log(data)).catch((error) => console.log(error));