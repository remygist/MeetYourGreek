"use strict";
const usernameFromStorage = localStorage.getItem("username");
console.log(usernameFromStorage);

const suggestionSelector = document.querySelector(".suggestionSelector");

suggestionSelector.addEventListener("change", () => {
    const selectedPage = suggestionSelector.value;
    console.log(selectedPage);

    document.getElementById("deitiesContent").style.display = "none";
    document.getElementById("mythsContent").style.display = "none";
    document.getElementById("inspirationsContent").style.display = "none";

    document.getElementById(selectedPage + "Content").style.display = "block";
});



//change password
document
    .querySelector("#inputForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let passwordChange = {};
        passwordChange.username = usernameFromStorage;
        passwordChange.password = document.querySelector("#password").value;
        passwordChange.newPassword =
            document.querySelector("#newPassword").value;

        console.log(passwordChange);

        getData(
            "https://web-2-course-project-jayu.onrender.com/updateProfile",
            "PUT",
            passwordChange
        ).then((data) => {
            console.log(data);

            if (data.status === "Succes") {
                alert(data.message);
            } else {
                alert(data.message);
            }
        });
    });

//suggest deity
document
    .querySelector("#deitiesForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let deitySuggest = {};
        deitySuggest.name = document.querySelector("#nameDeity").value;
        deitySuggest.title = document.querySelector("#titleDeity").value;
        deitySuggest.description =
            document.querySelector("#descriptionDeity").value;

        console.log(deitySuggest);

        getData(
            "https://web-2-course-project-jayu.onrender.com/suggestDeity",
            "POST",
            deitySuggest
        ).then((data) => {
            console.log(data);

            if (data.status === "Saved") {
                alert(data.message);
                document.querySelector("#nameDeity").value = "";
                document.querySelector("#titleDeity").value = "";
                document.querySelector("#descriptionDeity").value = "";
            } else {
                alert(data.message);
            }
        });
    });

//suggest myth
document
    .querySelector("#mythsForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let mythSuggest = {};
        mythSuggest.title = document.querySelector("#titleMyth").value;
        mythSuggest.description =
            document.querySelector("#descriptionMyth").value;

        console.log(mythSuggest);

        getData(
            "https://web-2-course-project-jayu.onrender.com/suggestMyth",
            "POST",
            mythSuggest
        ).then((data) => {
            console.log(data);

            if (data.status === "Saved") {
                alert(data.message);
                document.querySelector("#titleMyth").value = "";
                document.querySelector("#descriptionMyth").value = "";
            } else {
                alert(data.message);
            }
        });
    });

//suggest inspiration
document
    .querySelector("#inspirationsForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let inspirationSuggest = {};
        inspirationSuggest.title =
            document.querySelector("#titleInspirations").value;
        inspirationSuggest.description = document.querySelector(
            "#descriptionInspirations"
        ).value;

        console.log(inspirationSuggest);

        getData(
            "https://web-2-course-project-jayu.onrender.com/suggestInspiration",
            "POST",
            inspirationSuggest
        ).then((data) => {
            console.log(data);
            if (data.status === "Saved") {
                alert(data.message);
                document.querySelector("#titleInspirations").value = "";
                document.querySelector("#descriptionInspirations").value = "";
            } else {
                alert(data.message);
            }
        });
    });

//delete account
document.querySelector(".deleteBtn").addEventListener("click", (event) => {
    event.preventDefault();
    let account = {};
    account.username = usernameFromStorage;

    getData(
        "https://web-2-course-project-jayu.onrender.com/deleteUser",
        "DELETE",
        account
    ).then((data) => {
        console.log(data);

        if (data.status === "Success") {
            alert(data.message);
            window.location.href = "index.html";
        } else {
            alert(data.message);
        }
    });
});

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(data),
    });
    return await resp.json();
}
