import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import QuizImg from '../../assets/quiz.svg'

import styles from './Welcome.module.css'

const Welcome = () => {
  // quizState pega os valores
  // dispatch altera os valores
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id={styles.welcome}>
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={QuizImg} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome