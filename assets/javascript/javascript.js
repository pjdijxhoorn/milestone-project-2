let players = ["Tim", "Harry","paul","hendrik","charles","rick","benjamin","Tom","Tjonge",];

// the code under this comment is to hide/show the home, timer and results content.
homeButton();
function homeButton(){
    $( ".content-area-timer" ).hide();
    $( ".content-area-results" ).hide();
    $( ".content-area-home" ).show();
    $("#watchgroup").hide();
    $("#btngroup").hide();
    $(".img-block").hide();
}
function timerButton(){
    $( ".content-area-timer" ).show();
    $(".img-block").show();
    $("#btngroup").show();
    $("#watchgroup").show();
    $( ".content-area-results" ).hide();
    $( ".content-area-home" ).hide();

    $( ".item" ).remove();
    createDivs();


}
function resultsButton(){
    $( ".content-area-timer" ).hide();
    $( ".content-area-results" ).show();
    $( ".content-area-home" ).hide();
    $("#watchgroup").hide();
    $("#btngroup").hide();
    $(".img-block").hide();
}

// the code under this comment is to add or remove players via button from the players array.
function addPlayer(){
    let add = document.getElementById("nameAdd");
    if (add.value === ""){ document.getElementById("error").innerHTML = `You didn't fill in a Name!`;}
    else {
        players.push(add.value);
        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML = ``;
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

// code under this comment is to build div for every player

var Stopwatch = function(elem, options) {
    var timer = createTimer(),
        startButton = createButton("start", start),
        stopButton = createButton("stop", stop),
        resetButton = createButton("reset", reset),
        offset,
        clock,
        interval;

    // default options
    options = options || {};
    options.delay = options.delay || 1;

    // append elements
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(stopButton);
    elem.appendChild(resetButton);

    // initialize
    reset();

    // private functions
    function createTimer() {
        return document.createElement("span");
    }

    function createButton(action, handler) {
        var a = document.createElement("a");
        a.href = "#" + action;
        a.innerHTML = action;
        a.addEventListener("click", function(event) {
            handler();
            event.preventDefault();
        });
        return a;
    }

    function start() {
        if (!interval) {
            offset = Date.now();
            interval = setInterval(update, options.delay);
        }
    }

    function stop() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    function reset() {
        clock = 0;
        render(0);
    }

    function update() {
        clock += delta();
        render();
    }

    function render() {
        var h = Math.floor(clock / (1000 * 60 * 60)) % 24;
        var m = Math.floor(clock / (1000 * 60)) % 60;
        var s = Math.floor(clock / 1000) % 60;
        var ms = Math.floor(clock % 1000);

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        timer.innerHTML = h + ':' + m + ':' + s + '';

    }

    function delta() {
        var now = Date.now(),
            d = now - offset;

        offset = now;
        return d;
    }

    this.start = start;
    this.stop = stop;
    this.reset = reset;
};


var elems = document.getElementsByClassName("basic");
for (var i = 0, len = elems.length; i < len; i++) {
    new Stopwatch(elems[i]);
}






// to create dragable blocks.

function createDivs(){
    for (let player in players){
        let newElement =document.createElement('div');
        newElement.className="item d-none d-sm-block d-md-block;"
        newElement.innerHTML=`${players[player]}<br>00:00<br>00:00`;
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


// code under this comment is to make the stopwatch.



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