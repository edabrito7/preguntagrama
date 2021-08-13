import PropTypes from 'prop-types';


export default function TextInput ({label, type, id, name, disabled, placeholder, handleChange, handleBlur, isRequired, errors}) {
    return (
            <>
            <label
                htmlFor={id}
                className='flex flex-col justify-center mt-3 mb-0.5 mx-2'
            >
                {label}
                <input
                    className='border-2 rounded-md border-black placeholder-gray-500 px-2 py-1 focus:bg-white focus:text-black focus:outline-none'
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
                {errors}
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
    isRequired: PropTypes.bool,
    errors: PropTypes.string
}


TextInput.defaultProps = {
    disabled: false,
    required: false,
    type: 'text'
}