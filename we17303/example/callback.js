
function LoadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        callback(script);
    };
    script.onerror = function () {
        callback(new Error("Lỗi rồi!!!!!!!!"));
    };
    document.head.append(script);
};
LoadScript("https://github.com/Minh452003/WEB501-ECMAScript", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});