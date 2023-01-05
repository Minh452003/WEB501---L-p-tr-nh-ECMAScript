const person ={
    name: "Minh",
    age: 19,
    address: {
        city: "Yên Bài,Ba Vì",
        state: "YB",
    },
};

// const {
//     name,age,address:{city},
// }=person;

function showInfo({name,age,address:{city}}){
    console.log(`${name} is ${age} years old and lives in ${city}`);
}
showInfo(person);

// Destructoring array

function States(initValue){

    let value=initValue;

    function getValue(){
        return value;
    }
    function setValue(newValue){
        value=newValue;
    }

    return [getValue,setValue];
}

const [count,setCount]=States(30);

console.log("Giá trị cũ: ",count());
setCount(50);
console.log("Giá trị mới: ",count());