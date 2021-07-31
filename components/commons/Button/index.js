import PropTypes from 'prop-types';


export default function Button ({type, onClick, children }) {
    const styles = {
        primary: 'bg-primary border-primary',
        secundary: 'bg-grayLight border-grayLight'
    }
    return (
        <button 
        className={`m-2 border-4 w-7/12 rounded-md p-0.5 text-blueDark ${styles[type]}`}
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