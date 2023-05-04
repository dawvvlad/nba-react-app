import { createContext, useReducer } from "react"
import { TeamReducer } from "./TeamReducer"

export const TeamContextProvider = createContext()

const initialState = {
    currentTeam: {},
    teamIsLoading: false,
    nextEvent: {},
    teamLogo: undefined,
    date: ``,
    players: []
}
export const TeamContext = ({ children }) => {
    const [ teamState, dispatch ] = useReducer(TeamReducer, initialState) 

    teamState.setCurrentTeam = (value) => {
        dispatch({ type: "SET_CURRENT_TEAM", payload: value})
    }
    teamState.setTeamIsLoading = (value) => {
        dispatch({ type: "SET_TEAM_IS_LOADING", payload: value})
    }
    teamState.setNextEvent = (value) => {
        dispatch({ type: "SET_NEXT_EVENT", payload: value})
    }
    teamState.setTeamLogo = (value) => {
        dispatch({ type: "SET_TEAM_LOGO", payload: value})
    }
    teamState.setDate = (value) => {
        dispatch({ type: "SET_DATE", payload: value})
    }
    teamState.setPlayers = (data) => {
        dispatch({ type: "SET_PLAYERS", payload: data })
    }

    return(
        <TeamContextProvider.Provider value={teamState}>
            {children}
        </TeamContextProvider.Provider>
    )
}