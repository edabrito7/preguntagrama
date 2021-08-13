import PropTypes from 'prop-types'


export default function Button ({type, onClick, children }) {
    const styles = {
        primary: 'bg-blue-700 border-blue-700 text-white hover:bg-opacity-90 hover:border-opacity-90',
        secundary: 'bg-white border-blue-600 text-blue-600 hover:text-blue-800 hover:border-blue-800',
        alert: 'bg-white border-red-600 text-red-600 hover:text-red-800 hover:border-red-800',
        cancel: 'bg-red-700 border-red-700 text-white hover:bg-opacity-90 hover:border-opacity-90'
    }
    return (
        <button 
        className={`m-3 border-2 w-7/12 rounded-md p-0.5  font-bold uppercase ${styles[type]}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

Button.defaultProps = {
    type: 'primary'
}