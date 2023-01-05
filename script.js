/**
 * @author: LASME Ayou Emeline 
 * @param {*} event 
 * @returns 
 */

function validerLetterInput(event) {
    let codeDuClavier = event.codeDuClavier || event.which;

    // autorisation des saisies alphabetiques
    if (codeDuClavier >= 65 && codeDuClavier <= 90) {
        return true;
    }
    // autorisation des caracteres speciaux backspace=8, 
    else if (codeDuClavier == 8 || codeDuClavier == 27 || codeDuClavier == 32 || codeDuClavier == 20 || codeDuClavier == 9 || codeDuClavier == 46) {
        return true;
    }
    return false;
}
