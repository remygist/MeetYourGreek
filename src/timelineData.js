"use strict";
import Timeline from "./Timeline.js";

const timelineArray = [];
const pageContainer = document.querySelector(".timelineContainer");
const sidebarContainer = document.querySelector(".sidebar");

async function getData() {
    try {
        const response = await fetch(
            "https://web-2-course-project-jayu.onrender.com/getTimeline"
        );
        const data = await response.json();

        console.log(data);
        //storing data into classes
        data.forEach((timeline) => {
            const timelineData = new Timeline(
                timeline._id,
                timeline.title,
                timeline.description,
                timeline.image
            );
            //pushing data to global array
            timelineArray.push(timelineData);
        });
        showTimeline();
    } catch (error) {
        console.log(error);
    }
}

function showTimeline() {
    //clear previous content
    sidebarContainer.innerHTML = "";
    pageContainer.innerHTML = "";
    timelineArray.forEach(function (timeline) {
        sidebarContainer.insertAdjacentHTML(
            "beforeend",
            timeline.htmlSidebarData
        );
    });

    const selectedEventId = getSelectedEvent();
    let selectedTimeline = timelineArray[selectedEventId];

    pageContainer.insertAdjacentHTML(
        "beforeend",
        selectedTimeline
            ? selectedTimeline.htmlContainerData
            : timelineArray[0].htmlContainerData
    );

    selectedTimeline = document.querySelectorAll(".timelineItem");
    showTimelineData(selectedTimeline);
}

function showTimelineData(selectedTimeline) {
    console.log(timelineArray[0].htmlContainerData);

    selectedTimeline.forEach((data) => {
        data.addEventListener("click", () => {
            console.log("Clicked timeline:", data);
            const clickedTimelineId = data.id;
            const clickedTimeline = timelineArray.find(
                (timeline) => timeline.id == clickedTimelineId
            );

            console.log(clickedTimeline);
            pageContainer.innerHTML = "";
            pageContainer.insertAdjacentHTML(
                "beforeend",
                clickedTimeline.htmlContainerData
            );
        });
    });
}

function getSelectedEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("eventId");
}

getData();
console.log(timelineArray);
