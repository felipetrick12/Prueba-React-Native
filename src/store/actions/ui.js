import { types } from "../../types/types";


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err

});

export const RemoveError = () => ({
    type: types.uiRemoveErro,
    
});

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});

export const startMenu = () => ({
    type: types.uiSelectMenu
});

export const endMenu = () => ({
    type: types.uiEndMenu
});

