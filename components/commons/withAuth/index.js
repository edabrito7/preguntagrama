// hooks
import { useUser } from "hooks/useUser"


const WithAuth = (WrappedComponent) => {
    return (props) => {
        const user = useUser()

        if(user) {
            return <WrappedComponent {...props} />
        } 
        return null
    }
}


export default WithAuth