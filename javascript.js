let players= ["tim", "paul", "richard"];
console.log(players)

// the code under this comment is to add or remove players via button from the players array.
function addPlayer() {
    let add = document.getElementById("nameAdd");
    if (add.value === ""){ document.getElementById("error").innerHTML = `You didn't fill in a Name`}
    else {
        players.push(add.value);
        console.log(players)
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



// code under this comment is to build stopwatch for every player

function buildStopWatches(){
    let html = `
  <table>
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
      <td class="bTimer"></td>
      <td class="switch"> <label class="toggle-control">
  <input type="checkbox" checked="checked">
  <span class="control"></span>
</label></td>
      <td class="fTimer"></td>
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
document.getElementById("stopwatch").innerHTML =buildStopWatches();




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