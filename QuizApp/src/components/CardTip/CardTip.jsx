import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { Modal, Box } from '@mui/material';

import styles from './CardTip.module.css'

const CardTip = ({open}) => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <Modal open={open} onClose={() => {
            dispatch({type: "CLOSE_MODAL"})
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition>
            <Box className={styles.cardTip}>
                <p> {currentQuestion.tip} </p>
            </Box>
        </Modal>
    )
}

export default CardTip