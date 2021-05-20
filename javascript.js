let players= ["tom", "charles"];
console.log(players)

function addPlayer() {
    let add = document.getElementById("nameAdd");
    players.push(add.value);
    console.log(players)
    document.getElementById("table").innerHTML=players.toString();
    document.getElementById("error").innerHTML=``
}

function RemovePlayer(){
    let Remove =document.getElementById("nameRem")
    if( players.includes(Remove.value)){
   let number = players.indexOf(Remove.value)
    players.splice(number, 1)
    document.getElementById("table").innerHTML=players.toString();
        document.getElementById("error").innerHTML=``
    }else{
        document.getElementById("error").innerHTML=`This person is not on the list!`;
    }}

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
let table= buildTable();
document.getElementById("table").innerHTML= table;