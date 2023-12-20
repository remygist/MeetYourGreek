"use strict";

document
    .querySelector("#inputForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let user = {};

        user.username = document.querySelector("#username").value;
        user.password = document.querySelector("#password").value;
        user.passwordConfirm = document.querySelector("#passwordConfirm").value;

        console.log(user);

        //check for password
        if (user.password == user.passwordConfirm) {
            getData(
                "https://web-2-course-project-jayu.onrender.com/register",
                "POST",
                user
            ).then((data) => {
                alert("Succesfully registered");
                window.location.href = "login.html";
            });
        } else {
            alert("Passwords do not match");
        }
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
