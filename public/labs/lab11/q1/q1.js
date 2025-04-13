function createTable(){
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderCollapse ="collapse";
    table.style.width = "30%";
 
 
    let row1 = table.insertRow();
    let cell1 = row1.insertCell(0);
    cell1.textContent = "Cell1";
 
    let cell2 = row1.insertCell(1);
    cell2.textContent = "Cell2";
 
    let cell3 = row1.insertCell(2);
    cell3.textContent = "Cell3";
 
    let row2 = table.insertRow();
    let cell4 = row2.insertCell(0);
    cell4.textContent = "Cell4";
 
    let cell5 = row2.insertCell(1);
    cell5.textContent = "Cell5";
 
    let cell6 = row2.insertCell(2);
    cell6.textContent = "Cell6";
 
    let row3 = table.insertRow();
    let cell7 = row3.insertCell(0);
    cell7.textContent = "Cell7";
 
    let cell8 = row3.insertCell(1);
    cell8.textContent = "Cell8";
 
    let cell9 = row3.insertCell(2);
    cell9.textContent = "Cell9";
 
    let cells = table.querySelectorAll("td");
 
    cells.forEach(cell => {
        cell.style.border = "1px solid black";
    });
 
    document.body.appendChild(table);
 
}
 
function createButton(){
    let br = document.createElement("br");
 
    let button1 = document.createElement("button");
    button1.textContent = "Click here!";
    button1.style.backgroundColor = "red";
    button1.setAttribute("onmouseover","this.style.backgroundColor='green'");
    button1.setAttribute("onmouseout","this.style.backgroundColor='red'");
 
    document.body.appendChild(br);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(button1);
   
}
 
function createTextBox(){
    let br = document.createElement("br");
 
    let box = document.createElement("input");
    box.setAttribute("type","text");
    box.style.backgroundColor = "green";
 
    box.setAttribute("onfocus","changeOnFocus(this)");
    box.setAttribute("onblur","changeOnBlur(this)");
 
    document.body.appendChild(br);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(box);
 
}
 
function changeOnFocus(x){
    x.style.backgroundColor = "yellow";
    x.placeholder = "Welcome";
}
function changeOnBlur(x){
    x.style.backgroundColor = "green";
    x.placeholder = "";
}
 
function doubleClick(){
    let br = document.createElement("br");
 
    let box = document.createElement("input");
    box.setAttribute("type","text");
    box.setAttribute("id","inputBox");
    box.placeholder = "Enter text";
 
    let button2 = document.createElement("button");
    button2.textContent = "Cick here!";
    button2.setAttribute("ondblclick","addItem()");
 
    let newUl = document.createElement("ul");
    newUl.setAttribute("id","list");
 
    document.body.appendChild(br);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(box);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(button2);
    document.body.appendChild(newUl);
}
 
function addItem(){
    let inputAdd = document.getElementById("inputBox");
    let newLi = document.createElement("li");
    newLi.textContent = inputAdd.value;
 
    document.getElementById("list").appendChild(newLi);
    inputAdd.value = "";   
}

function keyPress(){
    let br = document.createElement("br");
    let input1 = document.createElement("input");
    input1.setAttribute("onkeydown","increaseCount()");

    let input2 = document.createElement("input");
    input2.setAttribute("id","count");
    input2.value = 0;
    
    document.body.appendChild(br);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(input1);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(input2);
}

function increaseCount(){
    document.getElementById("count").value++; 
}

 
createTable();
createButton();
createTextBox();
doubleClick();
keyPress();