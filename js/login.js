"use strict"

document.querySelector("#inputForm").addEventListener("submit", function (event) {
    

    let user = {}
    user.username = document.querySelector("#username").value;
    user.password = document.querySelector("#password").value

    console.log(user);

    //check for login
    getData("https://web-2-course-project-jayu.onrender.com/login", "POST", user).then(data => {
        console.log(data);
    })


})

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        mode: "cors",
        body: JSON.stringify(data)
    });
    return await resp.json();
}