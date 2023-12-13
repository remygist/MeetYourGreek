"use strict"

const contentZeus = "blablabla this is zeus"
const contentPoseidon = "blablabla this is poseiodn"
const pageContainer = document.querySelector(".deityContainer")
console.log(pageContainer);

const zeus = document.querySelector("#zeus")
zeus.addEventListener("click", () => {
    console.log("clci");
    pageContainer.innerHTML = ""
    pageContainer.insertAdjacentHTML("beforeend",contentZeus)
})

const poseidon = document.querySelector("#poseidon")
poseidon.addEventListener("click", () => {
    console.log("clci");
    pageContainer.innerHTML = ""
    pageContainer.insertAdjacentHTML("beforeend",contentPoseidon)
})


