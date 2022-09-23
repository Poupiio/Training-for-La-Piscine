/* Si je suis en distanciel, et que j'ai une question, alors je 
considère mes options :
        - Si je veux écrire, alors je pose ma question dans le Chat
        - Sinon si j'ai envie de parler, alors je pose ma question à l'oral
        - Sinon, je me tais.
    Sinon (je n'ai pas de question), je continue de travailler. */

if (distanciel) {
    if (question && ecrire) {
        console.log("Je pose ma question dans le chat");
    } else if (question && parler) {
        console.log("Je pose ma question à l'oral");
    } else if (!question) {
        console.log("Je continue de travailler");
    } else {
        console.log("Je me tais");
    }  
}
    
    // Exemple de Simon :
if (jaiFaim) {                  // Si j'ai faim
    if (bouffeFrigo > 0) {      // Et que j'ai de la bouffe dans le frigo
        if (poisson) {          // Si j'ai du poisson etc
            console.log("pokeball");
        } else if (poulet > 0) {
            console.log("pouleFrit");
        } else if (salade > 0) {
            if (boeuf) {
                console.log("saladeAuBoeuf");
            }
        }
    }
}