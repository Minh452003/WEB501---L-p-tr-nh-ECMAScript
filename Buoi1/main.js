// Khai báo biến
const names=["Minh","Duy","Văn","Vũ"];
// Truy cập vào mảng element
const nameEL=document.querySelector("#nm");

let result="";
// Sử dụng vòng lặp
for(let i=0;i<names.length;i++){
    result += "<div>" + names[i] +"</div>";
}
// In ra ngoài màn hình
nameEL.innerHTML=result;


//-------------------Các loại function-----------------------------------------

// function name
function sum(a,b){
return a+b;
}
console.log(sum(20,30));

// function expression
const sum2= function(a,b){
    return a+b;
}
console.log(sum2(40,30));

// function arrow
const sum3 =(a,b) => a+b;
console.log(sum3(40,50));

