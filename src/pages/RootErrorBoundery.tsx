/**
 * @copyright 2024 codewithsadee
 * @license MIT
 * @description Assets for the app
 */
import { isRouteErrorResponse, useRouteError, Link } from "react-router"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Ghost } from "lucide-react"

const RootErrorBoundery = () => {

    const error = useRouteError();
  return (
    <div className="min-h-[100vh] flex flex-col">
        <Header />

        <div className="grow container">
            <h1>
                {isRouteErrorResponse(error) ? "Hmm.. That Page Doesn't Exist." : "Something Went Wrong"}
            </h1>

            <p>
                {isRouteErrorResponse(error) ? "You can go back and manage your task with ease." : "We're working on this issue. Please try again later."}
            </p>
            <div>
                <Button asChild>
                    <Link to="/">Return To Home</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link to="/app/inbox">View Inbox</Link>
                </Button>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default RootErrorBoundery