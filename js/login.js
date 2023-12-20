"use strict"


document.querySelector("#inputForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = {};
    user.username = document.querySelector("#username").value;
    user.password = document.querySelector("#password").value;

    console.log(user);

    // Check for login
    getData("https://web-2-course-project-jayu.onrender.com/login", "POST", user).then(data => {
        console.log(data);

        // If login is successful, store the username in local storage and navigate to profile.html
        if (data.status === "Authentication succesfull") {
            localStorage.setItem('username', user.username);
            window.location.href = 'profile.html';
        }
    });
});

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        mode: "cors",
        body: JSON.stringify(data)
    });
    return await resp.json();
}