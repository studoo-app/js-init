console.log("Script condition-3 chargé !")

//Décommentez la ligne ci-dessous
const type = prompt('Quel type de client êtes vous ? (Particulier, Professionnel ou Salarié)')
// Ecrire votre code ici, afficher si le prix de l'article à l'aide de console.log('votre réponse')
let pricingMessage
switch(type){
    case 'Particulier':
        pricingMessage = "Tarif 100 euros"
        break;
    case 'Professionnel':
        pricingMessage = "Tarif 50 euros"
        break;
    case 'Salarié':
        pricingMessage = "Tarif 25 euros"
        break;
    default:
        pricingMessage = " Veuillez choisir un type valide "
        break
}

console.log(pricingMessage)