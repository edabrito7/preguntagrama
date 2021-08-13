import PropTypes from 'prop-types'

export default function CategoryTag ({ children, color }) {
    return (
        <p
        className={`text-${color}-900 border-2 border-${color}-700 text-xs px-2 mx-2 rounded-md bg-${color}-200`}
        >
            { children }
        </p>
    )
}

CategoryTag.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.string
}

CategoryTag.defaultProps = {
    color: 'blue'
}