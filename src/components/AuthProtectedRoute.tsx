import { useAuthState } from 'react-firebase-hooks/auth'
import { FC, ReactElement, ReactNode } from 'react'
import { auth } from '../firebase/firebase'
import ProgressCircular from './custom/ProgressCircular'

type Props = {
    fallback?: ReactElement
    element: ReactNode
}
export const AuthProtectedRoute: FC<Props> = ({ fallback, element }) => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <ProgressCircular/>
    }
    if (!user) {
        return fallback ?? null
    }

    return <>{element}</>
}
