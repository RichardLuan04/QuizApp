import { createContext, useReducer } from "react";
import questions from '../data/questions_complete'

const Stages = ['Start', 'Playing', 'End']

const InitialState = {
    gameStage: Stages[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    title: 'Quiz de Programação'
}

const quizReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_STATE":

            let category = action.category
            
            return {
                ...state,
                gameStage: Stages[1],
                questions: questions[category].questions,
                title: questions[category].category
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
            const nextQuestion = state.currentQuestion + 1

            let theme
            
            if (action.theme === 'HTML') {
                theme = 0
            } else if (action.theme === 'CSS') {
                theme = 1
            } else {
                theme = 2
            }

            let endGame = false

            if (!questions[theme].questions[nextQuestion]) {
                endGame = true
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? Stages[2] : state.gameStage,
                answerSelected: false
            }
        case "NEW_GAME":
            return InitialState

        case "CHECK_ANSWER":
            if (state.answerSelected) return state

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
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