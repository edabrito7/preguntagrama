import PropTypes from 'prop-types'
import AnswerCard from '../AnswerCard'

export default function AnswerBox({ answers }) {
    const answersMapping = answers.map(({answer, id}) => {
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
    answers: PropTypes.array.isRequired
}