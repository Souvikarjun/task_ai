/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

/**
 * node modules
 */

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Outlet, useNavigation } from "react-router"
import { logo } from "@/assets"
import { Loader2 } from "lucide-react"


const RootLayout = () => {

  const navigation = useNavigation()

  const isLoading = navigation.state == 'loading' && !navigation.formData

  return (
    <>
        <div className="relative isolate min-h-[100dvh] flex flex-col overflow-hidden">
            <Header/>

            <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
                <Outlet/>
            </main>

            <Footer />

            <div className="bg-primary/20 absolute top-20 left-0 w-80 h-10 rorate-45 origin-top-left blur-3xl"></div>
            <div className="bg-primary/20 absolute top-20 left-0 w-80 h-10 -rorate-45 origin-top-left blur-3xl"></div>

            {/* Loading */}
            {isLoading && (
              <div className="fixed top-0 left-0 z-50 h-[100dvh] bg-background flex flex-col justify-center items-center gap-5">
                <img src={logo} alt="Task AI" width={64} height={64} />
                <Loader2 className="text-muted-foreground animate-spin"/>
              </div>
            )}


        </div>
    </>
  )
}

export default RootLayout
