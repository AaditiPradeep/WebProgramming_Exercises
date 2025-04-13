let secs=0,mins=0,hours=0;
let isRunning = false;
let timer;

function display(){
    document.getElementById("time").innerHTML = 
    (hours < 10? "0":"") + hours + ":" +
    (mins < 10? "0":"") + mins + ":" +
    (secs < 10? "0":"") + secs
}

function start(){
    if(!isRunning){
        isRunning = true;
        timer = setInterval(() => {
            secs++;
            if(secs==60){
                secs=0;
                mins++;
            }
            if(mins==60){
                mins=0;
                hours++;
            }
            display();
        },1000);
    }
}

function stop(){
    clearInterval(timer);
    isRunning = false;
}

function reset(){
    clearInterval(timer);
    isRunning = false;
    secs=0;
    mins=0;
    hours=0;
    display();
}

function DOB(){
    let br = document.createElement("br");
    let space = document.createElement("span");
    space.innerHTML = "&nbsp";

    let dob = document.createElement("input");
    dob.setAttribute("type","date");
    dob.setAttribute("id","dobInput");

    let label = document.createElement("label");
    label.textContent = "Age: ";

    let age = document.createElement("input");
    age.setAttribute("type","text");
    age.setAttribute("id","ageBox");
    age.setAttribute("onmouseover","calculateAge()");

    document.body.appendChild(br);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(dob);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(label);
    document.body.appendChild(space);
    document.body.appendChild(age);
}

function calculateAge(){
    let dobinput = document.getElementById("dobInput").value;
    if(dobinput){
        let dob = new Date(dobinput);
        let today = new Date();
        let age = today.getFullYear()- dob.getFullYear();

        if(dob.getMonth() > today.getMonth() || (dob.getMonth() === today.getMonth() &&  dob.getDate() > today.getDate())){
            age--;
        }

        document.getElementById("ageBox").value = age;
}
    }
    
function keyPress(){
    let br = document.createElement("br");
    let space = document.createElement("span");
    space.innerHTML = "&nbsp";

    let input1 = document.createElement("textarea");

    let label = document.createElement("label");
    label.textContent = "Character count: ";

    let input2 = document.createElement("input");
    input1.addEventListener("input",()=>{
        input2.value = input1.value.length;
    })
    
    document.body.appendChild(br);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(input1);
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(br.cloneNode());
    document.body.appendChild(label);
    document.body.appendChild(space);
    document.body.appendChild(input2);
}

DOB();
keyPress();