import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import styles from './Question.module.css'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id={styles.question}>
            <p>
                Pergunta {quizState.currentQuestion} de {quizState.questions.length}
            </p>
            <h2>sim</h2>
            <div id={styles.optionsContainer}>
                <p>Opções</p>
            </div>

            <button>Continuar</button>
        </div>
    )
}

export default Question