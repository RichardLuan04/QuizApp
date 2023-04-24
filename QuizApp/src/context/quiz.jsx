import { createContext, useReducer } from "react";
import questions from '../data/questions'

const Stages = ['Start', 'Playing', 'End']

const InitialState = {
    gameStage: Stages[0],
    questions,
    currentQuestion: 0
}

const quizReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: Stages[1]
            }

        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, InitialState)

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
}