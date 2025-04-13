let age = [39,47,21,54,23,61,69,49];
let names=["Alen","Deena","Diana","Jack","Jain","Kelvin","Louis","Rex"] 

let patients = [
    {id:1,name:"Alen",age:39},
    {id:2,name:"Deena",age:47},
    {id:3,name:"Diana",age:21},
    {id:4,name:"Jack",age:54},
    {id:5,name:"Jain",age:23},
    {id:6,name:"Kelvin",age:61},
    {id:7,name:"Louis",age:69},
    {id:8,name:"Rex",age:49}
]

function sort(){
    let sortedPatients = [...patients].sort((a,b) => b.age-a.age);
    displayData(sortedPatients,"tBody1","tHead1");
}

function displayData(data,tBodyId,tHeadId){
    let tHead = document.getElementById(tHeadId);
    tHead.innerHTML = `
    <tr>
    <th> P-Id </th>
    <th> Name </th>
    <th> Age </th>
    </tr>`
    
    let tBody = document.getElementById(tBodyId);
    tBody.innerHTML = "";

    data.forEach(p => {
        tBody.innerHTML += `
    <tr>
        <td>  ${p.id} </td>
        <td>  ${p.name} </td>
        <td>  ${p.age} </td>
    </tr>
    `
    });
    
}

function search(){
    let x = Number(document.getElementById("search").value);
    if(patients.find(p => p.id==x)){
        document.getElementById("result").innerText = `P-Id:${x} found!`;
    }
    else    
        document.getElementById("result").innerText = `P-Id:${x} not found!`;
}

function filterAge(){
    let maxValue = document.getElementById("max").value;
    let minValue = document.getElementById("min").value;

    let filteredAge = patients.filter(p => (p.age>=minValue && p.age<=maxValue));
    displayData(filteredAge,"tBody2","tHead2");
}

window.onload = function(){
    sort();
}
