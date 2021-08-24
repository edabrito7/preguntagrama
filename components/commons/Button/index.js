import PropTypes from 'prop-types'


export default function Button ({ type, style, onClick, children }) {
    const styles = {
        primary: 'bg-blue-700 border-blue-700 text-white hover:bg-opacity-90 hover:border-opacity-90',
        secundary: 'bg-white border-blue-600 text-blue-600 hover:text-blue-800 hover:border-blue-800',
        alert: 'bg-white border-red-600 text-red-600 hover:text-red-800 hover:border-red-800',
        cancel: 'bg-red-700 border-red-700 text-white hover:bg-opacity-90 hover:border-opacity-90'
    }
    return (
        <button 
        type={type}
        className={`m-3 border-2 w-7/12 rounded-md p-0.5  font-bold uppercase ${styles[style]}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    styles: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.string.isRequired,
}

Button.defaultProps = {
    style: 'primary'
}