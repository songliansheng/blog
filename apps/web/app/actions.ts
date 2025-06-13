'use server'
import { signIn, signOut } from '../auth'
import { redirect } from 'next/navigation'
// import { AuthError, CredentialsSignin } from '@auth/core/errors'
import { z } from 'zod'
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
import { signInSchema } from 'lib/zod'

export async function handleSignIn(formData: z.infer<typeof signInSchema>) {
    const validatedFields = signInSchema.safeParse(formData)
    // if (!validatedFields.success) {
    //     return {
    //         errors: validatedFields.error.flatten().fieldErrors,
    //     }
    // }
    await signIn('credentials', formData).then(({ ok, error }) => {
        if (ok) {
        } else {
            console.log(error)
        }
    })
}
export async function handleSignOut() {
    await signOut()
}
export async function handleSignIn3() {
    try {
        await signIn()
    } catch (error) {
        // if (error instanceof AuthError)
            // Handle auth errors
            throw error // Rethrow all other errors
    }
    // await signIn().then((response) => {
    //     console.log('Hello!World!')
    //     console.log(response)
    // })
}
// export async function supbaseApi(method,table,column) {
//     const supabase = createSupabaseClient()
//     switch (method) {
//         case 'insert':await supabase.from(table).insert({ id: 1, name: 'Denmark' })
//     }
//     await signOut()
// }
