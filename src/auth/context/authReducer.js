import { types } from "../types/types";

// ni el localStorage ni el console.log deberían llamarse en el reducer (buena practica)
// en su lugar, podemos hacerlo en la funcion de inicialización que se le pasa al reducer
// manejaremos el localStorage en el AuthProvider
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
}