function dynamicLine() {
    const dots = document.querySelectorAll(".dots");
    dots.forEach((item) => {
        item.addEventListener("click", (event) => {
            const eventId = event.currentTarget.getAttribute("id");
            window.location.href = `timelineData.html?eventId=${eventId}`;
        });
    });
}

dynamicLine();
