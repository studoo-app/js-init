console.log("Script condition-1 chargé !")

//Décommentez les lignes ci-dessous
const currentYear = 2023
const birthyear = prompt('Quel est votre année de naissance ?')

// Ecrire votre code ici, afficher le jeu video à l'aide de console.log('votre réponse')
const age = currentYear - parseInt(birthyear)
console.log(age)
let game = "";

if(age < 13){
    game = "Fortnite"
}else if(age > 13 && age < 18){
    game = "Call of Duty"
}else{
    game= "Elden Ring ou Diablo 4"
}

console.log(game)