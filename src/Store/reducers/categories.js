const INITIAL_STATE = {
    categories: []
}


export default function categoriesReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        default:
            return state
    }


}