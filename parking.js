var parkingLot = document.getElementById('parking-lot');
var lobby = document.getElementById('lobby');
var totalCars=4;
       
createSpaces();

function createSpaces(){
    var h;
    var v;
    var hTop = 9;
    var hLeft = 7;   
    var vTop = 11;
    var vLeft = 242;

    for(h = 0; h < 2; h++){
        for (let c=0; c<9; c++){

            var newDiv = document.createElement("div"); 
        
            newDiv.setAttribute("class","hSpace");
            newDiv.setAttribute("number",`num-${h}`);
            newDiv.setAttribute("style",`position:absolute; top: ${hTop}px; left:${hLeft}px;`);
            var midTop = parseInt(hTop)+31;
            var midLeft = parseInt(hLeft) +60;
            newDiv.setAttribute("midTop",midTop);
            newDiv.setAttribute("midLeft",midLeft); //might not need this attribute
            newDiv.innerText=`num-${c}-${h}`;
            parkingLot.appendChild(newDiv);
            hTop+=64;
        }
        hLeft+=660;
        console.log(hLeft);
        hTop = 9;                   
    }

    for (v=0; v<3;v++){
        for (let r =0; r<5; r++){
        var newDiv = document.createElement("div"); 

        newDiv.setAttribute("class","vSpace");
        newDiv.setAttribute("number",`num-${v}`);
        newDiv.setAttribute("style",`position:absolute; top: ${vTop}px; left:${vLeft}px;`);
        newDiv.innerText=`num-${r}-${v}`;
        parkingLot.appendChild(newDiv);

        vLeft+=64;
        }
        vTop+=225;
        vLeft = 242;
    }    
}

createCars(totalCars);

function createCars(totalCars){
    for (let i=0; i<totalCars; i++){
        var newCar = document.createElement("div"); 
        var spacer = i*65;
        newCar.setAttribute("class","car");
        newCar.setAttribute("number",`${i}`);
        newCar.setAttribute("style",`position:absolute; top: 636px; left:${spacer}px; background-image:url('images/car-${randomColor()}.png');`);
        lobby.appendChild(newCar);

    }
    
}

function randomColor(){
    let arrColor = ['aqua','blue','dragon','green','grey','hot-pink','lime-green','orange','pink','purple','red','red-stripes','white','yellow'];
    let rand = Math.floor(Math.random() * arrColor.length);
    return arrColor[rand];
}

function randMake(){
    let arrMake = ['Honda','Toyota','Ford','Subaru','Jeep','Chevy'];
    let rand = Math.floor(Math.random() * 5);
    return  arrMake[rand];
}
