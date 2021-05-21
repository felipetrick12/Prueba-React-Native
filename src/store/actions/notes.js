
import { types } from "../../types/types";


export const notesActive =(elemento)=> ({

    type: types.notesActive,
    payload : elemento

});

export const notesClean =(elemento)=> ({

    type: types.notesCleaning,
    payload : elemento

});








