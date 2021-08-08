import PropTypes from 'prop-types';


export default function Button ({type, onClick, children }) {
    const styles = {
        primary: 'bg-primary border-primary text-white hover:bg-opacity-90 hover:border-opacity-90',
        secundary: 'bg-white border-primary text-black hover:text-primary',
        alert: 'bg-white border-alert text-alert hover:bg-opacity-80 hover:border-opacity-80',
        cancel: 'bg-alert border-alert text-white hover:bg-opacity-90 hover:border-opacity-90'
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