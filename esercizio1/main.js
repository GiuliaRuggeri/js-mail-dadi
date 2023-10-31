const btn = document.getElementById("button")


const emails = ["johndoe@gmail.com", "janedoe@gmail.com", "mariorossi@hotmail.it",]

btn.addEventListener("click", function () {

    let isAuthenticated = (false)
    let eMail = document.getElementById("usermail").value
    
    for (let index = 0; index < emails.length; index++) {

        const element = emails[index];
        if (element == eMail) {
            console.log("autenticato");
            isAuthenticated = true
        }

        else {
            console.log("failed")

        }



    }

    if (isAuthenticated) {
        alert("autenticazione avvenuta con successo")
    }

    else if (!isAuthenticated) {
        alert("autenticazione fallita")
    }
})

