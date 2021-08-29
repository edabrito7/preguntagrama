import PropTypes from 'prop-types'
import Button from "../Button"

// hooks
import { useTimer } from 'hooks/useTimer'

export default function Modal  ({ explication, closeModal }) {
    const timer = useTimer()
    const handleClose = () => {
        timer.dispatch({type: 'restart'})
        timer.initTimer()
        closeModal()
    }
    return(
        <div
        className='fixed z-10 inset-0 overflow-y-auto border-2 border-black flex justify-center items-center bg-opacity-80 bg-gray-400'
        >
            <section
            className='bg-white h-6/12 py-8 px-2 mx-2 absolute'
            >
                <h2
                className='text-center text-xl text-blue-700'
                >Parece que debemos estudiar un poquito mas...</h2>
                <span
                onClick={handleClose}
                className='absolute right-4 top-1 cursor-pointer text-lg'
                >X</span>
                <p
                className='mt-4'
                >Aqui va la explicacion que aun no tengo escrita en ninguna respuesta</p>
                <div
                className='flex justify-center items-center my-4'
                >
                    <Button
                    type='button'
                    style='primary'
                    onClick={handleClose}
                    >Cerrar</Button>
                </div>
            </section>
        </div>
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    explication: PropTypes.string.isRequired
}