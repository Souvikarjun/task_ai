/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */
import { isRouteErrorResponse, useRouteError, Link } from "react-router"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { pageNotFound } from "@/assets"

const RootErrorBoundery = () => {

    const error = useRouteError();
  return (
    <div className="min-h-[100vh] flex flex-col">
        <Header />

        <div className="grow container flex flex-col justify-center items-center pt-32 pb-12">
            <h1 className="text-2xl font-semibold text-center sm:text-4xl">
                {isRouteErrorResponse(error) ? "Hmm.. That Page Doesn't Exist." : "Something Went Wrong"}
            </h1>

            <p className="text-muted-foreground max-w-[55ch] text-center mt-4 mb-6 sm:tsxt-lg">
                {isRouteErrorResponse(error) ? "You can go back and manage your task with ease." : "We're working on this issue. Please try again later."}
            </p>
            <div className="flex gap-2 ">
                <Button asChild>
                    <Link to="/">Return To Home</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link to="/app/inbox">View Inbox</Link>
                </Button>
            </div>
            <figure className="mt-10">
                <img src={pageNotFound} alt="404 Page not found" width={560} height={373}/>
            </figure>
        </div>

        <Footer />
    </div>
  )
}

export default RootErrorBoundery