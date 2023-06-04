'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Formik } from 'formik'
import { useFormik } from 'formik'
import '@/app/globals.css'
export default function Login() {
     const router = useRouter()
    const formik = useFormik({
        initialValues: {
            password: '',
            username: '',
            email: '',
        },
        onSubmit: async (values) => {
            // console.log('formik values', values)
            const state = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                // callbackUrl: 'http://localhost:3000/about',
            })
            console.log('SignIn begin', state)
            if (state != undefined && state.ok == true)
            // return '/'
                 router.push('/about')
        },
    })
    return (
        <div className="div-layer-I">
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    placeholder="Email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                ></input>
                <input
                    id="password"
                    type="Password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                ></input>
                <button
                    id="login"
                    type="submit"
                >
                    Log In
                </button>
            </form>
        </div>
    )
}
