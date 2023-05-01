const reducer = (state, { type, payload }) => {
    switch(type) {
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "SET_TEAMS":
            return {
                ...state,
                teams: payload
            }

        default: return state
    }
}

export { reducer } 