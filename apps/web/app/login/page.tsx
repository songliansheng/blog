import { auth } from 'auth'
import Redirect from '@/components/Redirect'
import LoginForm from '@/components/LoginForm'
export default async function LoginPage({ }: {}) {
     const session = await auth()
    return session ? (
        <Redirect message="You have loged in!" link="/" />
    ) : (
        <LoginForm />
    )
}
