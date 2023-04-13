const Initial_state = {

    loader: false
}

export default function loaderReducer(state = Initial_state, action) {

    switch (action.type) {
        case "SET_LOADER":
            return { ...state, loader: action.payload }
        default:
            return state

    }


}