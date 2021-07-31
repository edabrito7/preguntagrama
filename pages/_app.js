import 'tailwindcss/tailwind.css'
import AppLayout from 'components/commons/AppLayout'
import PropTypes from 'prop-types'
function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp
