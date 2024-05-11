import { LoginForm } from 'components/LoginForm'
import { auth } from 'auth'

// import { LoginForm } from 'components/LoginForm'

export default async function () {
    const session = await auth()
    if (session) {
        return <>You have logged in</>
    } else
        return (
            <>
                <LoginForm />
            </>
        )
}
