'use client'
import { Field, Formik, useFormik, Form } from 'formik'
import { Button } from './Button'
import { Input } from './Input'
import { z } from 'zod'
const ValidationSchema = z.object({
    email: z
        .string()
        .email('Invalid email address')
        .min(5, 'Email is too short'),
    password: z.string().min(8, 'Password is too short'),
})
// type FormValues = z.infer<typeof ValidationSchema>

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
                email: '',
                password: '',
            }}
            onSubmit={(values) => {
                console.log('Hello ! World')
                console.log(values)
            }}
            validate={validator}
        >
            {({ errors }) => (
                // placeholder="Email"
                <Form

                // placeholder={undefined}
                // onPointerEnterCapture={undefined}
                // onPointerLeaveCapture={undefined}
                >
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <Field type="email" name="email" placeholder="Email" />

                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />{' '}
                            Remember me
                        </label>
                    </div> */}
                    <button type="submit">Submit</button>
                    {/* <Button
                        className="w-100 btn btn-lg btn-primary"
                        buttonName="Sign in"
                        type="submit"
                    /> */}
                </Form>
            )}
        </Formik>
    )
}
