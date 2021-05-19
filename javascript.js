let players= ["tom", "charles"];
console.log(players)

function addPlayer() {
    let add = document.getElementById("nameAdd");
    players.push(add.value);
    console.log(players)
    document.getElementById("table").innerHTML=players.toString();
}

function RemovePlayer(){
    let usernameRemove =document.getElementById("nameRem")
    if( players.includes(usernameRemove.value)){
   let number = players.indexOf(usernameRemove.value)
    players.splice(number, 1)
    document.getElementById("table").innerHTML=players.toString();
    }else{
        document.getElementById("error").innerHTML=`this person is not on the list!`;
    }}



