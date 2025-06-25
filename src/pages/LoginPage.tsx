/**
 * @copyright 2024 codewithsadee
 * @license MIT
 * @description Assets for the app
 */


import Head from "@/components/Head"
import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
  return (
    <>
        <Head title="Log in to Task AI - To-Do list and Project Management App"/>

        <section>
            <div className="container flex justify-center">
                <SignIn signUpUrl="/register"/>
            </div>
        </section>
    </>
  )
}

export default LoginPage