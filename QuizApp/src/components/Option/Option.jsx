import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import styles from './Option.module.css'

const Option = ({ option, answer, selectOption }) => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className={`${styles.option} ${
            quizState.answerSelected && option === answer ? styles.correct: ''
        } ${
            quizState.answerSelected && option !== answer ? styles.wrong : ''
        }`} onClick={() => selectOption(option)}>
            <p> {option} </p>
        </div>
    )
}

export default Option