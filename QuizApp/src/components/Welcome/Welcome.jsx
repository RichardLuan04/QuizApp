import { useContext, useEffect } from 'react'
import { QuizContext } from '../../context/quiz'

import QuizImg from '../../assets/quiz.svg'
import Questions from '../../data/questions_complete'

import styles from './Welcome.module.css'

const Welcome = () => {
  // quizState pega os valores
  // dispatch altera os valores
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className={styles.welcome}>
      <h2>Seja bem vindo</h2>
      <p>Escolha qual quiz deseja fazer:</p>

      <div className={styles.buttons}>
        {Questions.map((button, key) => (
          <button onClick={() => dispatch({type: "CHANGE_STATE", category: key})} key={key}> {button.category} </button>
        ))}
      </div>

      <img src={QuizImg} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome