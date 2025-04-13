document.getElementById("red").addEventListener("input",()=> {
    document.getElementsByClassName("red")[0].style.zIndex = document.getElementById("red").value;
    document.getElementById("redZ").innerText = document.getElementsByClassName("red")[0].style.zIndex;
});

document.getElementById("green").addEventListener("input",()=> {
    document.getElementsByClassName("green")[0].style.zIndex = document.getElementById("green").value;
    document.getElementById("greenZ").innerText = document.getElementsByClassName("green")[0].style.zIndex;
});

document.getElementById("blue").addEventListener("input",()=> {
    document.getElementsByClassName("blue")[0].style.zIndex = document.getElementById("blue").value;
    document.getElementById("blueZ").innerText = document.getElementsByClassName("blue")[0].style.zIndex;
});

