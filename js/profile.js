"use strict"


function showPage(){

    const selectedPage = document.getElementById("suggestionSelector").value;
    console.log(selectedPage);

    document.getElementById('deitiesContent').style.display = "none";
    document.getElementById('mythsContent').style.display = "none";
    document.getElementById('inspirationsContent').style.display = "none";

    document.getElementById(selectedPage + "Content").style.display = "block"
}