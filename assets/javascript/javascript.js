let players = ["Tim", "Harry","paul","hendrik","charles","rick","benjamin","Tom","Tjonge",];

function homeButton(){
    $( ".content-area-timer" ).hide();
    $( ".content-area-results" ).hide();
    $( ".content-area-home" ).show();
}
function timerButton(){
    $( ".content-area-timer" ).show();
    $( ".content-area-results" ).hide();
    $( ".content-area-home" ).hide();
    document.getElementById("stopwatch").innerHTML = buildStopWatches();
    $( ".item" ).remove();
    createDivs();
}
function resultsButton(){
    $( ".content-area-timer" ).hide();
    $( ".content-area-results" ).show();
    $( ".content-area-home" ).hide();
}

// the code under this comment is to add or remove players via button from the players array.
function addPlayer(){
    let add = document.getElementById("nameAdd");
    if (add.value === ""){ document.getElementById("error").innerHTML = `You didn't fill in a Name!`;}
    else {
        players.push(add.value);
        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML = ``;

        createDivs();
    }}

function RemovePlayer(){
    let Remove =document.getElementById("nameRem");
    if( players.includes(Remove.value)){
   let number = players.indexOf(Remove.value);
    players.splice(number, 1);
        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML=``;
    }else{
        document.getElementById("error").innerHTML=`This person is not on the list!`;
    }}

// code under this comment is to build a players list table from the player array.

function buildTable(){
    let html = `
  <table>
    <thead>
      <tr>
        <th>Players:</th>
      </tr>
    </thead>
    <tbody>
`;

    for (let player of players) {
        let rowHtml = `
    <tr>
      <td>${player}</td>
    </tr>
  `;
        html += rowHtml;
    }
    html += `
  </tbody>
</table>
`;
    return html;
}

// code under this comment is to build table for every player

function buildStopWatches(){
    let html = `
<div class="d-block d-sm-block d-md-none">
  <table class="t-table">
    <thead>
      <tr>
        <th>Players:</th>
        <th>Time on bench </th>
        <th> Switch</th>
        <th>Time in field </th>
      </tr>
    </thead>
    <tbody>
`;
    for (let player of players) {
        let rowHtml = `
    <tr>
      <td>${player}</td>
      <td id="b${player}">  00:00:00  </td>
      <td> 
            <label class="toggle-control">
                <input class="switch"  type="checkbox" checked="checked">
                <span class="control"></span>
            </label>
      </td>
      <td id="f${player}">  00:00:00  </td>
    </tr>
  `;
        html += rowHtml;
    }
    html += `
  </tbody>
</table>
</div>
`;
    return html;
}

// to create dragable stopwatches.

function createDivs(){
    for (let player in players){
        let newElement =document.createElement('div');
        newElement.className="item d-none d-sm-block d-md-block;"
        newElement.innerHTML=`<br>00:00<br>00:00`;
        document.getElementById("container").appendChild(newElement);
    }
}

// code below is to make the created divs draggable.

let container = document.querySelector("#container");
let activeItem = null;

let active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {

    if (e.target !== e.currentTarget) {
        active = true;

        activeItem = e.target;

        if (activeItem !== null) {
            if (!activeItem.xOffset) {
                activeItem.xOffset = 0;
            }

            if (!activeItem.yOffset) {
                activeItem.yOffset = 0;
            }

            if (e.type === "touchstart") {
                activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
                activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
            } else {
                console.log("doing something!");
                activeItem.initialX = e.clientX - activeItem.xOffset;
                activeItem.initialY = e.clientY - activeItem.yOffset;
            }
        }
    }
}

function dragEnd(e) {
    if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
    }

    active = false;
    activeItem = null;
}

function drag(e) {
    if (active) {
        if (e.type === "touchmove") {
            e.preventDefault();

            activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
            activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
            activeItem.currentX = e.clientX - activeItem.initialX;
            activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}






// code under this comment is to be able to input the text in add and remove player with the enter key.

//document.getElementById("nameAdd").addEventListener("keydown",function (event){
   // if(event.key === "Enter"){
       // addPlayer();
   // }
//});
//document.getElementById("nameRem").addEventListener("keydown",function (event){
   // if(event.key === "Enter"){
     //   RemovePlayer();
   // }
//});