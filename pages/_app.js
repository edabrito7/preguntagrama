import 'tailwindcss/tailwind.css'
import AppLayout from '../components/commons/Applayout'
function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
