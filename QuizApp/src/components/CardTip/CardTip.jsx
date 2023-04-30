import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import Modal from 'react-modal'

import styles from './CardTip.module.css'

const CardTip = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <>
            {quizState.tipText && (
                <div className={styles.cardTip}>
                    <div className={styles.close}>
                        <button onClick={() => dispatch({type: "CLOSE_TIP"})}> X </button>
                    </div>
                    <p> {currentQuestion.tip} </p>
                </div>
            )}
        </>
    )
}

export default CardTip