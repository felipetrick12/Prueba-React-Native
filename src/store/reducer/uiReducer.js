import { types } from "../../types/types";

const initialState ={
    loading: false,
    msgError:null,
    select: null
}


export const uiReducer =(state = initialState,action)=> {

    switch (action.type) {
        case  types.uiSetError:
            return {
                ...state,
                msgError:action.payload
            }
            
        case types.uiRemoveErro:
            return {
                ...state,
                msgError: null
            }
        case types.uiStartLoading:
            return { 
                ...state,
                loading:true
            }
        case types.uiFinishLoading:
                return { 
                    ...state,
                    loading:false
                }
        case types.uiSelectMenu:
            return {
                ...state,
                select:true
            }
        case types.uiEndMenu:
            return {
                    ...state,
                    select:false
            }
            
    
        default:
            return state;
    }

}