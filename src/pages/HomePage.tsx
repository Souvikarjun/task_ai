/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Head from "@/components/Head"
import { heroBannerLg, heroBannerSm } from "@/assets"

const HomePage = () => {
  return (
   <>
   <Head title="Task AI, AI Powered To-Do List and Project Management App"/>

    <section id='#'>
      <div className="conrainer !px-8 grid grid-cols-1 gap-8 items-center xl:gap-12 xl:grid-cols-[1fr_1.5fr] xl:ml-28 xl:mr-28">
        <div className="flex flex-col items-center text-center space-y-4 lg:text-left lg:items-start lg:space-y-6">
          <h1 className="text-4xl font-semibold max-w-[22ch] md:text-5xl xl:text-5xl 2xl:text-6xl">
            Simplify Your Work With <span className="inline-flex bg-gradient-to-t from-primary/50 to-primary/30 rounded-full px-2 overflow-hidden">AI-Powered</span> task Management
          </h1>

          <p className="max-w-[48ch] text-foreground/80 md:text-lg lg:text-xl">
            Simplyfy life for you and you team with world's #1 task manager to-do list app.
          </p> 

          <Button asChild size="lg">
            <Link to="/register">Start for free</Link>
          </Button>
        </div>

        <figure className="bg-secondary rounded-2xl overflow-hidden aspect-square max-md:max-w-[480px] max-md:mx-auto md:aspect-video md:max-w-[960px] ">
          <img src={heroBannerSm} alt="Task AI Home" width={480} height={480} className="md:hidden" />
          <img src={heroBannerLg} alt="Task AI Home" width={960} height={540} className="max-md:hidden" />
        </figure>
      </div>
    </section>
   </>
  )
}

export default HomePage