let array = new Array();

array[3148] = "nice permisiuni. \n dami rolu mai sus ca altii"
array[5621] = "MESAJU DE AJUTOR NU E GAIST"

function getError(err) {
    let id;
    switch (err) {
        case "LIPSESTE FAMILIA SI PERMISIUNILE": 
            id = "3148"
            break;
        default:
            return "nu recunosc mesaju fututi pizda matii" 
    }
    return id;
}

function findError(id) {
    let fix = array[id];
    if (fix != undefined) {
        return fix;
    } else {
        return "Error: That help message is not valid. More information can be found by typing $helpmsg 5621"
    }
}
module.exports = {
    getError,
    findError
}