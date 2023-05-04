import { createContext, useReducer } from "react"
import { reducer } from "./Reducer"

const MainContext = createContext()

const initialState = {
    isLoading: false,
    teams: [],
    gameResults: []
}

const Context = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    state.setIsLoading = (data) => {
        dispatch({ type: "SET_IS_LOADING", payload: data })
    }

    state.setTeams = (data) => {
        dispatch({ type: "SET_TEAMS", payload: data })
    }

    state.setGameResults = (value) => {
        dispatch({ type: "SET_GAME_RESULTS", payload: value })
    }

    return (
        <MainContext.Provider value={state}>
            { children }
        </MainContext.Provider>
    )
}

export { MainContext, Context }