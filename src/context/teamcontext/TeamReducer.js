export const TeamReducer = (state, { type, payload }) => {
    switch(type) {
        case "SET_CURRENT_TEAM":
            return {
                ...state,
                currentTeam: payload
            };
        case "SET_TEAM_IS_LOADING":
            return {
                ...state,
            };
        case "SET_NEXT_EVENT":
            return {
                ...state,
                nextEvent: payload
            };
        case "SET_TEAM_LOGO":
            return {
                ...state,
                teamLogo: payload
            };
        case "SET_DATE":
            return {
                ...state,
                date: payload
            };
        case "SET_PLAYERS":
            return {
                ...state,
                players: payload
            }
        default: return state
    }
}