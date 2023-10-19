let bars = document.querySelector("#fa-bars");
let ul = document.querySelector(".header-ul");
console.log(bars.classList.contains("fa-bars"));
bars.onclick = function () {
    if(bars.classList.contains("fa-bars")){
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-xmark");
        ul.classList.add("activ")
    }else {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
        ul.classList.remove("activ")
    }
};
console.log(bars)
console.log(ul)