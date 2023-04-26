import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import Option from '../Option/Option'

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
            <p id={styles.quizText}>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2> {currentQuestion.question} </h2>
            <div className={styles.optionsContainer}>
                {currentQuestion.options.map((option, key) => (
                    <Option key={key} option={option} answer={currentQuestion.answer} selectOption={onSelectOption}/>
                ))}
            </div>
            
            {quizState.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}> Continuar </button>
            )}
        </div>
    )
}

export default Question