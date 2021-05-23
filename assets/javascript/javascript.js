let players= ["Tim", "Harry", "Tom", "Paul", "Hendrik", "Simon", "Koen", "Jorrit", "Fleur", "Nicola",];

// the code under this comment is to add or remove players via button from the players array.
function addPlayer() {
    let add = document.getElementById("nameAdd");
    if (add.value === ""){ document.getElementById("error").innerHTML = `You didn't fill in a Name`}
    else {
        players.push(add.value);
        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML = ``
    }}

function RemovePlayer(){
    let Remove =document.getElementById("nameRem")
    if( players.includes(Remove.value)){
   let number = players.indexOf(Remove.value)
    players.splice(number, 1)

        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML=``
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
// code under this comment is to store the array data locally


// code under this comment is to build table for every player

function buildStopWatches(){
    let html = `
<div class="d-block d-sm-block d-md-none">
  <table class="t-table">
    <thead>
      <tr>
        <th>Players:</th>
        <th>Time on bench </th>
        <th> switch</th>
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
document.getElementById("stopwatch").innerHTML =buildStopWatches();

// Function to set time to HH/MM/SS
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
    document.getElementById("mainTimer").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
}
// Create event listeners

let playButton = document.getElementById("start");
let pauseButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);






// code under this comment is to be able to input the text in add and remove player with the enter key.

document.getElementById("nameAdd").addEventListener("keydown",function (event){
    if(event.key ==="Enter"){
        addPlayer();
    }
})
document.getElementById("nameRem").addEventListener("keydown",function (event){
    if(event.key ==="Enter"){
        RemovePlayer();
    }
})