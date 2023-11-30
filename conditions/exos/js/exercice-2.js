console.log("Script condition-2 chargé !")

//Décommentez les lignes ci-dessous
const password = prompt('Entrez un mot de passe')

// Ecrire votre code ici, afficher si le mot de passe est considéré comme fort ou non à l'aide de console.log('votre réponse')
let message = ""
console.log(password.substring(3,4))
if(
    password.length > 8 &&
    (password.includes("@") || password.includes("_")) &&
    password.substring(3,4) === "T"
){
    message = "Mot de passe Fort !"
}else{
    message = "Mot de passe faible !"
}

console.log(message)