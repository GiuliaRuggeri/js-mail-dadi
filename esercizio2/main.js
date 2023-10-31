let user1=document.getElementById("user1")
let computer=document.getElementById("computer")
let parità=document.getElementById("parità")
const btn=document.getElementById("btn")
let punteggio

btn.addEventListener("click", function(){
    user1.innerHTML=""
    computer.innerHTML=""
    parità.innerHTML=""
    
   let utente1=Math.floor(Math.random ()*6)+1
   let utente2=Math.floor(Math.random()*6)+1
    console.log(utente1)
    console.log(utente2)

    if(utente1 == utente2){
        console.log("Parità")
        parità.innerHTML="Parità"
    }

    else if(utente1 > utente2){
        console.log("ha vinto l'utente")
        user1.innerHTML="Hai vinto!"
    }

    else{
        console.log("ha vinto il computer")
        computer.innerHTML="Ha vinto il computer"
    }
})