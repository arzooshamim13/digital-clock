console.log("Hello World");

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(()=>{
    let curantTime = new Date();
    

    hrs.innerHTML = (curantTime.getHours()<10?"0":"") + curantTime.getHours();
    min.innerHTML = (curantTime.getMinutes()<10?"0":"") + curantTime.getMinutes();
    sec.innerHTML = (curantTime.getSeconds()<10?"0":"") + curantTime.getSeconds();
},1000);



// var  campus = "Saylani institue";
// var newArr = campus.slice(0,7)
// console.log(newArr)

// const arr = ["pizza", "Pasta","Cold drink","burger","zinger"];
// var newSe = arr.slice(0,2);
// console.log(newSe)

var userName = "She is My Friend";
var find = userName.charAt(0);
console.log(find)