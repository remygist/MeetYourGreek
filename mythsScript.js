"use strict";
import Myths from "./Myths.js";

const mythsArray = [];
const pageContainer = document.querySelector(".mythContainer");
const sidebarContainer = document.querySelector(".sidebar");

async function getData() {
    try {
        const response = await fetch("https://web-2-course-project-jayu.onrender.com/getMyths");
        const data = await response.json();

        console.log(data);
        //storing data into classes
        data.forEach((myth) => {
            const mythData = new Myths(
                myth._id,
                myth.title,
                myth.description,
                myth.image
            );
            //pushing data to global array
            mythsArray.push(mythData);
        });
        showMyths();
    } catch (error) {
        console.log(error);
    }
}

function showMyths() {
    //clear previous content
    sidebarContainer.innerHTML = "";
    pageContainer.innerHTML = "";
    mythsArray.forEach(function (myth) {
        sidebarContainer.insertAdjacentHTML("beforeend", myth.htmlSidebarData);
    });
    pageContainer.insertAdjacentHTML(
        "beforeend",
        mythsArray[0].htmlContainerData
    );
    const selectedMyth = document.querySelectorAll(".mythItem");
    showMythsData(selectedMyth);
}

function showMythsData(selectedMyth) {
    console.log(mythsArray[0].htmlContainerData);

    selectedMyth.forEach((data) => {
        data.addEventListener("click", () => {
            console.log("Clicked deity:", data);
            const clickedMythId = data.id;
            const clickedMyth = mythsArray.find(
                (myth) => myth.id == clickedMythId
            );
            console.log(clickedMyth);
            pageContainer.innerHTML = "";
            pageContainer.insertAdjacentHTML(
                "beforeend",
                clickedMyth.htmlContainerData
            );
        });
    });
}

getData();
console.log(mythsArray);