import PropTypes from 'prop-types'
import AnswerCard from '../AnswerCard'
// hooks
import { useAnswers } from 'hooks/useAnswers'
export default function AnswerBox({ answersArray, correctAnswer }) {
    const answers = useAnswers()
    answers.addCorrectAnswer(correctAnswer)
    console.log(correctAnswer)

    const answersMapping = answersArray.map(({answer, id}) => {
        return <AnswerCard key={id} answer={answer} id={id}/>
    })
    return (
        <section
        className='grid gap-0.5 grid-cols-2 grid-rows-2  w-10/12 mx-auto my-4'
        >
            {answersMapping}
        </section>

    )
}

AnswerBox.propTypes = {
    answersArray: PropTypes.array.isRequired,
    correctAnswer: PropTypes.string.isRequired
}