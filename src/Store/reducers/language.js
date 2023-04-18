const Initial_state = {

    Language: 'en'
}

export default function languageReducer(state = Initial_state, action) {

    switch (action.type) {
        case "SET_LANGUAGE":
            return { ...state, Language: action.payload }
        default:
            return state

    }


}