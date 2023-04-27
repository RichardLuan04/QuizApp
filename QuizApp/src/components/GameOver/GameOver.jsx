import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import WellDone from '../../assets/welldone.svg'

import styles from './GameOver.module.css'

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className={styles.gameOver}>
            <h2>Fim de jogo!</h2>
            <p>Pontuação: {quizState.score / quizState.questions.length}</p>
            <p>
                Você acertou {quizState.score/10} de {quizState.questions.length} perguntas.
            </p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver