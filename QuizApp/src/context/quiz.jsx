import { createContext, useReducer } from "react";
import questions from '../data/questions'

const Stages = ['Start', 'Playing', 'End']

const InitialState = {
    gameStage: Stages[0],
    questions,
    currentQuestion: 0,
    score: 0
}

const quizReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: Stages[1]
            }
        case "REORDER_QUESTIONS":
            const reoderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })

            return {
                ...state,
                questions: reoderedQuestions
            }
        case "CHANGE_QUESTION":
            const nextQuesion = state.currentQuestion + 1

            let endGame = false

            if (!questions[nextQuesion]) {
                endGame = true
            }

            return{
                ...state,
                currentQuestion: nextQuesion,
                gameStage: endGame ? Stages[2] : state.gameStage
            }
        case "NEW_GAME":
            return InitialState
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, InitialState)

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
}