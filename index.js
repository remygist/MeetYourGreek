"use strict";
import Deities from "./Deities.js";

const deitiesArray = [];
const pageContainer = document.querySelector(".deityContainer");
const sidebarContainer = document.querySelector(".sidebar");



async function getData() {
    try {
        const response = await fetch("http://localhost:3000/getDeities");
        const data = await response.json();

        console.log(data);
        //storing data into classes
        data.forEach((deity) => {
            const deityData = new Deities(
                deity._id,
                deity.name,
                deity.title,
                deity.description,
                deity.img
            );
            //pushing data to global array
            deitiesArray.push(deityData);
        });
        showDeities();
    } catch (error) {
        console.log(error);
    }
}

function showDeities() {
    //clear previous content
    sidebarContainer.innerHTML = "";
    deitiesArray.forEach(function (deity) {
        sidebarContainer.insertAdjacentHTML("beforeend", deity.htmlSidebarData);
    });
    const selectedDeity = document.querySelectorAll(".deityItem");
    showDeitiesData(selectedDeity);
}

function showDeitiesData(selectedDeity){
    console.log(deitiesArray[0].htmlContainerData);

    selectedDeity.forEach((data) => {
        data.addEventListener("click", () => {
            console.log("Clicked deity:", data);
            
            
        });
    });

}

getData(); 
console.log(deitiesArray);



// let selectedDeity = document.querySelector(".deityItem");
// selectedDeity.addEventListener("click", () => {
//     console.log(selectedDeity.id);
// })
// console.log(selectedDeity);