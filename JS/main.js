// Features required for the project

// - Implementation of : counter and  buttons + and - 

let containerFeatures = document.getElementById("container-features");

let pCounter = document.createElement("p");
pCounter.setAttribute("id","counter");
pCounter.setAttribute("class","counter");

let containerButtons = document.createElement("div");
containerButtons.setAttribute("class","basic__buttons__counter");

containerFeatures.appendChild(pCounter);
containerFeatures.appendChild(containerButtons);

let btnAdd = document.createElement("button");
btnAdd.innerHTML= "+"
btnAdd.setAttribute("id","incrase-one");
btnAdd.setAttribute("class","button__counter button");

let btnSub = document.createElement("button");
btnSub.innerHTML= "-"
btnSub.setAttribute("id","subtract-one");
btnSub.setAttribute("class","button__counter button");

containerButtons.appendChild(btnAdd);
containerButtons.appendChild(btnSub);

let counter = document.getElementById("counter");

let btnIncraseOne = document.getElementById("incrase-one");

let btnSubtractOne = document.getElementById("subtract-one");

let count = 0;

counter.innerHTML = count;

btnIncraseOne.addEventListener("click",incraseOne);
btnSubtractOne.addEventListener("click",subtractOne);

function incraseOne (){
    count++;
    counter.innerHTML = count 
};

function subtractOne (){
    count--;
    counter.innerHTML = count 
};
