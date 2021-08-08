import PropTypes from 'prop-types';


export default function TextInput ({label, type, id, name, disabled, placeholder, handleChange, handleBlur, isRequired}) {
    return (
            <>
            <label
                htmlFor={id}
                className='flex flex-col justify-center mt-3 mb-0.5 mx-2'
            >
                {label}
                <input
                    className='border-2 rounded-md border-primary focus:bg-primary focus:text-white focus:outline-none'
                    type={type}
                    id={id}
                    name={name}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={isRequired}
                />
            </label>
            <p className='text-alert mx-2 text-xs'>
                Errores
            </p>
            </>
    )
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    isRequired: PropTypes.bool
}


TextInput.defaultProps = {
    disabled: false,
    required: false,
    type: 'text'
}