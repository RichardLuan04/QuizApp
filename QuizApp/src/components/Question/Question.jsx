import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import styles from './Question.module.css'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div class={styles.question}>
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2> {currentQuestion.question} </h2>
            <div class={styles.optionsContainer}>
                <p>Opções</p>
            </div>

            <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
        </div>
    )
}

export default Question