/**
 * @copyright 2024 codewithsadee
 * @license MIT
 * @description Assets for the app
 */

import Head from "@/components/Head"
import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
  return (
    <>
        <Head title="Create an Account - Task AI  To-Do list and Project Management App"/>

        <section>
            <div className="container flex justify-center">
                <SignUp signInUrl="/login"/>
            </div>
        </section>
    </>
  )
}

export default RegisterPage