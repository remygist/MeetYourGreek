"use strict";
import Inspirations from "./Inspirations.js";

const inspirationsArray = [];
const pageContainer = document.querySelector(".inspirationContainer");
const sidebarContainer = document.querySelector(".sidebar");

async function getData() {
    try {
        const response = await fetch("https://web-2-course-project-jayu.onrender.com/getInspirations");
        const data = await response.json();

        console.log(data);
        //storing data into classes
        data.forEach((inspiration) => {
            const inspirationData = new Inspirations(
                inspiration._id,
                inspiration.title,
                inspiration.description,
                inspiration.imgThen,
                inspiration.imgToday
            );
            //pushing data to global array
            inspirationsArray.push(inspirationData);
        });
        showInspirations();
    } catch (error) {
        console.log(error);
    }
}

function showInspirations() {
    //clear previous content
    sidebarContainer.innerHTML = "";
    pageContainer.innerHTML = "";
    inspirationsArray.forEach(function (inspiration) {
        sidebarContainer.insertAdjacentHTML("beforeend", inspiration.htmlSidebarData);
    });
    pageContainer.insertAdjacentHTML(
        "beforeend",
        inspirationsArray[0].htmlContainerData
    );
    const selectedInspiration = document.querySelectorAll(".inspirationItem");
    showInspirationsData(selectedInspiration);
}

function showInspirationsData(selectedInspiration) {
    console.log(inspirationsArray[0].htmlContainerData);

    selectedInspiration.forEach((data) => {
        data.addEventListener("click", () => {
            console.log("Clicked inspiration:", data);
            const clickedInspirationId = data.id;
            const clickedInspiration = inspirationsArray.find(
                (inspiration) => inspiration.id == clickedInspirationId
            );
            console.log(clickedInspiration);
            pageContainer.innerHTML = "";
            pageContainer.insertAdjacentHTML(
                "beforeend",
                clickedInspiration.htmlContainerData
            );
        });
    });
}

getData();
console.log(inspirationsArray);