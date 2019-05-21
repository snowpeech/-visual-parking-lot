'use strict';   
var parkingLot = document.getElementById('parking-lot');
var lobby = document.getElementById('lobby');
var totalCars=10;
var arrLot = [];
var carsParked = 0;
var intervalId;
       
createSpaces(); //creates spots on the parking lot
createLotArray(); // creates parking lot array that will help manage open/available spots


function createSpaces(){
    var i=0;
    var hTop = 9;
    var hLeft = 7;   
    var vTop = 11;
    var vLeft = 242;

    for(let h = 0; h < 2; h++){
        for (let c=0; c<9; c++){

            var newDiv = document.createElement("div"); 
        
            newDiv.setAttribute("class","hSpace");
            newDiv.setAttribute("id",`num-${i}`);
            newDiv.setAttribute("open","true"); //might not need this
            newDiv.setAttribute("style",`position:absolute; top: ${hTop}px; left:${hLeft}px;`);
            var midTop = parseInt(hTop)+31;
            var midLeft = parseInt(hLeft) +60;
            newDiv.setAttribute("midTop",midTop);
            newDiv.setAttribute("midLeft",midLeft); //might not need this attribute
            newDiv.innerText=`num-${i}`;
            parkingLot.appendChild(newDiv);
            hTop+=64;
            i++;
        }
        hLeft+=660;
        hTop = 9;                   
    }

    for (let v=0; v<3;v++){
        for (let r =0; r<5; r++){
        var newDiv = document.createElement("div"); 

        newDiv.setAttribute("class","vSpace");
        newDiv.setAttribute("number",`${i}`);
        newDiv.setAttribute("style",`position:absolute; top: ${vTop}px; left:${vLeft}px;`);
        newDiv.innerText=`num-${i}`;
        parkingLot.appendChild(newDiv);

        vLeft+=64;
        i++;
        }
        vTop+=225;
        vLeft = 242;
    }    
}

function Car(spotNum){
    var newCar = document.createElement("div"); 
    var spacer = 63*carsParked;
    newCar.setAttribute("class","car");
    newCar.setAttribute("number",`${carsParked}`);
    newCar.setAttribute("stall",`${spotNum}`) ;
    newCar.setAttribute("parkingTime",`${parkingTime()}`);
    newCar.setAttribute("style",`position:absolute; top: 636px; left:${spacer}px; background-image:url('images/car-${randomColor()}.png');`);
    lobby.appendChild(newCar);
}

function randomColor(){
    let arrColor = ['aqua','blue','dragon','green','grey','hot-pink','lime-green','orange','pink','purple','red','red-stripes','white','yellow'];
    let rand = Math.floor(Math.random() * arrColor.length);
    return arrColor[rand];
}

function parkingTime(){
    let parkTime = (Math.floor(Math.random() * 5 ) + 1) * 1000; //parking time: 1-5 seconds
    return parkTime;
}

function start() {
    intervalId = setInterval(assignStall(), 50);
}

function parkCar(){
    //assign stall
    // find stall coords
    //compare stall coords to current location
    // determine path
    //drive path
    //reach pre-park spot
    //park car
}

function createLotArray(){
    for (let i=0; i<33;i++){
        arrLot.push(i);
    }
    console.log(arrLot); // array of #s 0-32
}

function assignStall(){
    if (arrLot.length > 0 && carsParked < totalCars) {
        Car(arrLot.shift()); //creates car and assigns spot when spot is available
        carsParked++;
    }
}