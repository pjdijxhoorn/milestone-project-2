let players = ["Timothy", "Harriet", "paulus", "hendrik", "charles", "rick", "benjamin", "Tom",
    "Tjonge",];
let trueCheck = false;

// the code under this comment is to hide/show the home, timer and results content.
homeButton();

function homeButton() {
    $(".content-area-timer").hide();
    $(".content-area-results").hide();
    $(".content-area-home").show();
    $("#watchGroup").hide();
    $(".btngroup").hide();
    $(".img-block").hide();
}

function timerButton() {
    $(".content-area-timer").show();
    $(".img-block").show();
    $(".btngroup").show();
    $("#watchGroup").show();
    $(".content-area-results").hide();
    $(".content-area-home").hide();

    $(".item").remove();
    createDivs();
    addNames();


}

function resultsButton() {
    $(".content-area-timer").hide();
    $(".content-area-results").show();
    $(".content-area-home").hide();
    $("#watchGroup").hide();
    $(".btngroup").hide();
    $(".img-block").hide();
}

// the code under this comment is to add or remove players via button from the players array.
function addPlayer() {
    let add = document.getElementById("nameAdd");
    if (add.value === "") {
        document.getElementById("error").innerHTML = `You didn't fill in a Name!`;
    } else {
        players.push(add.value);
        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML = ``;
    }
}

function RemovePlayer() {
    let Remove = document.getElementById("nameRem");
    if (players.includes(Remove.value)) {
        let number = players.indexOf(Remove.value);
        players.splice(number, 1);
        document.getElementById("table").innerHTML = buildTable();
        document.getElementById("error").innerHTML = ``;
    } else {
        document.getElementById("error").innerHTML = `This person is not on the list!`;
    }
}

// code under this comment is to build a players list table from the player array.

function buildTable() {
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


// the code below is to add names to the timer page
function addNames() {
    let spans = document.querySelectorAll('div[class="name"]');
    for (let i = 0; i < players.length; i++) {
        spans[i].innerHTML = players[i];
    }
}

// the code below is for the toggle buttons to switch between timers


document.addEventListener('DOMContentLoaded', function () {

    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    let start = document.querySelectorAll("a[href='#start']");
    let stop = document.querySelectorAll("a[href='#stop']");
    let reset = document.querySelectorAll("a[href='#reset']");

        checkbox[0].addEventListener('change', function check1() {


            if (checkbox[0].checked && trueCheck === true) {
                start[1].click();
                stop[0].click();
                reset[0].click();

            } else if (trueCheck === true) {
                start[0].click();
                stop[1].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[1].addEventListener('change', function () {

            if (checkbox[1].checked && trueCheck === true) {
                start[3].click();
                stop[2].click();
                reset[2].click();

            } else if (trueCheck === true) {
                start[2].click();
                stop[3].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[2].addEventListener('change', function () {

            if (checkbox[2].checked && trueCheck === true) {
                start[5].click();
                stop[4].click();
                reset[4].click();

            } else if (trueCheck === true) {
                start[4].click();
                stop[5].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[3].addEventListener('change', function () {

            if (checkbox[3].checked && trueCheck === true) {
                start[7].click();
                stop[6].click();
                reset[6].click();

            } else if (trueCheck === true) {
                start[6].click();
                stop[7].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[4].addEventListener('change', function () {

            if (checkbox[4].checked && trueCheck === true) {
                start[9].click();
                stop[8].click();
                reset[8].click();

            } else if (trueCheck === true) {
                start[8].click();
                stop[9].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[5].addEventListener('change', function () {

            if (checkbox[5].checked && trueCheck === true) {
                start[11].click();
                stop[10].click();
                reset[10].click();

            } else if (trueCheck === true) {
                start[10].click();
                stop[11].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[6].addEventListener('change', function () {

            if (checkbox[6].checked && trueCheck === true) {
                start[13].click();
                stop[12].click();
                reset[12].click();

            } else if (trueCheck === true) {
                start[12].click();
                stop[13].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[7].addEventListener('change', function () {

            if (checkbox[7].checked && trueCheck === true) {
                start[15].click();
                stop[14].click();
                reset[14].click();

            } else if (trueCheck === true) {
                start[14].click();
                stop[15].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[8].addEventListener('change', function () {

            if (checkbox[8].checked && trueCheck === true) {
                start[17].click();
                stop[16].click();
                reset[16].click();

            } else if (trueCheck === true) {
                start[16].click();
                stop[17].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[9].addEventListener('change', function () {

            if (checkbox[9].checked && trueCheck === true) {
                start[19].click();
                stop[18].click();
                reset[18].click();

            } else if (trueCheck === true) {
                start[18].click();
                stop[19].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[10].addEventListener('change', function () {

            if (checkbox[10].checked && trueCheck === true) {
                start[21].click();
                stop[20].click();
                reset[20].click();

            } else if (trueCheck === true) {
                start[20].click();
                stop[21].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[11].addEventListener('change', function () {

            if (checkbox[11].checked && trueCheck === true) {
                start[23].click();
                stop[22].click();
                reset[22].click();

            } else if (trueCheck === true) {
                start[22].click();
                stop[23].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[12].addEventListener('change', function () {

            if (checkbox[12].checked && trueCheck === true) {
                start[25].click();
                stop[24].click();
                reset[24].click();

            } else if (trueCheck === true) {
                start[24].click();
                stop[25].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[13].addEventListener('change', function () {

            if (checkbox[13].checked && trueCheck === true) {
                start[27].click();
                stop[26].click();
                reset[26].click();

            } else if (trueCheck === true) {
                start[26].click();
                stop[27].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[14].addEventListener('change', function () {

            if (checkbox[14].checked && trueCheck === true) {
                start[29].click();
                stop[28].click();
                reset[28].click();

            } else if (trueCheck === true) {
                start[28].click();
                stop[29].click();

            } else {
                console.log("start is not on")
            }
        });
        checkbox[15].addEventListener('change', function () {

            if (checkbox[15].checked && trueCheck === true) {
                start[31].click();
                stop[30].click();
                reset[30].click();

            } else if (trueCheck === true) {
                start[30].click();
                stop[31].click();

            } else {
                console.log("start is not on")
            }
        });
    });


// code under this comment is to build div for every player

let Stopwatch = function (elem, options) {
    let timer = createTimer(),
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
        let a = document.createElement("a");
        a.href = "#" + action;
        a.innerHTML = action;
        a.addEventListener("click", function (event) {
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
        let h = Math.floor(clock / (1000 * 60 * 60)) % 24;
        let m = Math.floor(clock / (1000 * 60)) % 60;
        let s = Math.floor(clock / 1000) % 60;

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
        let now = Date.now(),
            d = now - offset;

        offset = now;
        return d;
    }

    this.start = start;
    this.stop = stop;
    this.reset = reset;
};


let elems = document.getElementsByClassName("basic");
for (let i = 0, len = elems.length; i < len; i++) {
    new Stopwatch(elems[i]);
}

function startBtn() {
    trueCheck = true;
    let startBtn = document.querySelectorAll("a[href='#start']")
    for (let i = 0; i < startBtn.length; i++)
        startBtn[i].click();

}

function stopBtn() {
    trueCheck = false;
    let stopBtn = document.querySelectorAll("a[href='#stop']")
    for (let i = 0; i < stopBtn.length; i++)
        stopBtn[i].click();
}

function resetBtn() {
    let resetBtn = document.querySelectorAll("a[href='#reset']")
    for (let i = 0; i < resetBtn.length; i++)
        resetBtn[i].click();
}


// to create dragable blocks.

function createDivs() {
    for (let player in players) {
        let newElement = document.createElement('div');
        newElement.className = "item d-none d-sm-block d-md-block;"
        newElement.innerHTML = `${players[player]}`;
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

function dragEnd() {
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
//})