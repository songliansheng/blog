'use client'
import { useFormik } from 'formik'
import { Button } from './Button'
import { Input } from './Input'
export function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <form className="w-50">
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <Input
                type="email"
                id="floatingEmail"
                label="Email address"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <Input
                type="password"
                id="floatingPassword"
                label="Password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>

            <Button
                className="w-100 btn btn-lg btn-primary"
                buttonName="Sign in"
                type="submit"
            />
        </form>
    )
}
