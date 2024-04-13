'use client'
import { Formik, useFormik, Form } from 'formik'
import { Button } from './Button'
import { Input } from './Input'
import { z } from 'zod'
const ValidationSchema = z.object({
    username: z
        .string()
        .min(3, 'Username is too short')
        .max(20, 'Username is too long'),
    email: z
        .string()
        .email('Invalid email address')
        .min(5, 'Email is too short'),
    password: z.string().min(8, 'Password is too short'),
})

export function LoginForm() {
    function validator(values) {
        try {
            ValidationSchema.parse(values)
        } catch (error) {
            if (error instanceof z.ZodError) {
                return error.formErrors.fieldErrors
            }
        }
    }
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //     },

    //     onSubmit: (values) => {
    //         alert(JSON.stringify(values, null, 2))
    //     },
    // })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validate={validator}
        >
            {(props) => (
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <Input
                        type="email"
                        id="floatingEmail"
                        label="Email address"
                        placeholder="Email"
                        onChange={props.handleChange}
                        value={props.values.email}
                    />
                    <Input
                        type="password"
                        id="floatingPassword"
                        label="Password"
                        placeholder="Password"
                        onChange={props.handleChange}
                        value={props.values.password}
                    />

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />{' '}
                            Remember me
                        </label>
                    </div>

                    <Button
                        className="w-100 btn btn-lg btn-primary"
                        buttonName="Sign in"
                        type="submit"
                    />
                </form>
            )}
        </Formik>
    )
}
