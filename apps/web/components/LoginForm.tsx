// 'use client'
import { Field, Formik, useFormik, Form } from 'formik'
import { Button } from './Button'
import { Input } from './Input'
import { signIn } from '../auth'
import { handleSignIn } from 'app/actions'
import { handleSignIn2 } from 'app/actions'
import { handleSignIn3 } from 'app/actions'
import { signInSchema } from 'lib/zod'
// import { useRouter } from 'next/navigation'
import { z } from 'zod'


// export function LoginForm() {
//     function validator(values) {
//         try {
//             signInSchema.safeParse(values)
//         } catch (zodError) {
//             return zodError.formErrors.fieldErrors
//         }
//     }
//     async function handleSignIn(formData) {
//         await signIn('credentials', formData)
//     }

//     return (
//         <div>
//             <Formik
//                 initialValues={{
//                     email: '',
//                     password: '',
//                 }}
//                 onSubmit={handleSignIn}
//                 // validate={validator}
//             >
//                 {({ errors }) => (
//                     // placeholder="Email"
//                     <Form

//                     // placeholder={undefined}
//                     // onPointerEnterCapture={undefined}
//                     // onPointerLeaveCapture={undefined}
//                     >
//                         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//                         <div className="px-3.5 py-4">
//                             <Field
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                             />
//                         </div>

//                         {errors.email && errors.email instanceof Array
//                             ? errors.email.map((error, index) => {
//                                   return <div key={index}>{error}</div>
//                               })
//                             : null}
//                         <div className="px-3.5 py-4">
//                             <Field
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 className="w-100 btn btn-lg btn-primary"
//                             />
//                         </div>
//                         {errors.password && errors.password instanceof Array
//                             ? errors.password.map((error, index) => {
//                                   return <div key={index}>{error}</div>
//                               })
//                             : null}
//                         {/* <div className="checkbox mb-3">
//                         <label>
//                             <input type="checkbox" value="remember-me" />{' '}
//                             Remember me
//                         </label>
//                     </div> */}
//                         <div>
//                             <button type="submit">Log In</button>
//                         </div>

//                         {/* <Button
//                         className="w-100 btn btn-lg btn-primary"
//                         buttonName="Sign in"
//                         type="submit"
//                     /> */}
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

export function VanillaForm() {
    return (
        <>
            <form action={handleSignIn}>
                <div>
                    <Input
                        label="email"
                        placeholder="Email"
                        type="email"
                        name="email"
                    />
                </div>

                <div>
                    <Input
                        label="password"
                        placeholder="Password"
                        type="password"
                        name="password"
                    />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </>
    )
}
