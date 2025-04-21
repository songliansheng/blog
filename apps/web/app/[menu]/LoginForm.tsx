import { auth } from "@/auth.config";
// import Redirect from '@/components/Redirect'
import LoginForm from "@/components/LoginForm";
import { AuthError } from "next-auth";
import { signIn, providersMetadata as providers } from "@/auth.config";
import { redirect } from "next/navigation";
import Button from "design-system/ui/Button";
const SignInButton = ({ provider }) => {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn(
            typeof provider === "function" ? provider().id : provider.id,
            { redirectTo: "/notes" }
          );
        } catch (error) {
          // Signin can fail for a number of reasons, such as the user
          // not existing, or the user not having the correct role.
          // In some cases, you may want to redirect to a custom error
          if (error instanceof AuthError) {
            console.log("Logs from login page error " + JSON.stringify(error));
            // return redirect('/notes/english_pronunciation')
          }

          // Otherwise if a redirects happens NextJS can handle it
          // so you can just re-thrown the error and let NextJS handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
          //  return redirect('/notes/english_pronunciation')
        }
      }}
    >
      <Button type="submit" className="text-sm">
        <span className="">
          {typeof provider === "function" ? provider().name : provider.name}
        </span>
      </Button>
    </form>
  );
};
export default async function LoginPage({}: {}) {
  // const session = await auth()
  /*  return session ? (
        <Redirect message="You have loged in!" link="/" />
    ) : (
        <LoginForm />
    ) */
  console.log("Logs from LoginForm.tsx: Provider name->");
  // console.log(GithubProvider2.id, GithubProvider2.name)
  return (
    <div className="flex gap-2">
      <span>Sign in with: </span>
      {providers.map((provider) => (
        <SignInButton provider={provider} />
      ))}
    </div>
  );
}
export function LoninForm() {
  return <LoginForm></LoginForm>;
}
