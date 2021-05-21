import { types } from "../../types/types";

const initialState ={
    notes: [],
    active:null,
}

export const notesReducer =(state=initialState,action)=>{

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active :{
                    ...action.payload
                }
            }
            case types.notesCleaning:
                return {
                    ...state,
                    active : null
                }

        default:
            return state;
    }

}