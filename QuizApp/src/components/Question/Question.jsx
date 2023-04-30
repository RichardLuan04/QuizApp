import { useContext, useState } from 'react'
import { QuizContext } from '../../context/quiz'

import Option from '../Option/Option'
import CardTip from '../CardTip/CardTip'

import styles from './Question.module.css'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: {
                answer: currentQuestion.answer, option
            }
        })
    }

    return (
        <div className={styles.question}>

            <CardTip open={quizState.tipText}/>

            <p id={styles.quizText}>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2> {currentQuestion.question} </h2>
            <div className={styles.optionsContainer}>
                {currentQuestion.options.map((option, key) => (
                    <Option key={key} option={option} answer={currentQuestion.answer} selectOption={onSelectOption} />
                ))}
            </div>

            <div className={styles.buttons}>
                {quizState.answerSelected && (
                    <button onClick={() => dispatch({ type: "CHANGE_QUESTION", theme: quizState.title })}> Continuar </button>
                )}

                {quizState.tipButton && (
                    <button onClick={() => dispatch({ type: "SHOW_TIP", theme: quizState.title })}> Dica </button>
                )}
            </div>
        </div>
    )
}

export default Question