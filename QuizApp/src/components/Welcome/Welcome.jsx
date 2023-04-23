import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import QuizImg from '../../assets/quiz.svg'

import styles from './Welcome.module.css'

const Welcome = () => {

  const quizState = useContext(QuizContext)

  return (
    <div className={styles.welcome}>
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={QuizImg} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome