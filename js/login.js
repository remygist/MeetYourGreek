"use strict"

document.querySelector("#inputForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = {}
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value

    console.log(user);

    //check for login
    getData("https://web2-hosting.onrender.com/login", "POST", user).then(data => {
        console.log(data);
    })


})

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await resp.json();
}