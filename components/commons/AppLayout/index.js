import PropTypes from 'prop-types';

export default function AppLayout ({ children }) {
    return (
        <main className='bg-background bg-opacity-70 min-h-screen flex justify-center'>
            <div className='w-full  md:w-6/12 md:rounded-2xl md:border-4 border-gray'>
                {children}
            </div>
        </main>
    )
}

AppLayout.propTypes = {
    children: PropTypes.element.isRequired
}