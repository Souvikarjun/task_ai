/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "@clerk/clerk-react"


const AuthSyncPage = () => {

    const navigate = useNavigate()

    const { isSignedIn, isLoaded, userId } = useAuth()

    useEffect(() => {
        if(!isLoaded) return;

        if(!isSignedIn){
            if(localStorage.getItem('clerkUserId')){
                localStorage.removeItem('clerkUserId')
            }
            navigate('/')
            return
        }

        if(isSignedIn){
            localStorage.setItem('clerkUserId', userId)

            navigate('/app/today')
        }

    }, [isSignedIn, isLoaded, userId])

  return (
    <div>AuthSyncPage</div>
  )
}

export default AuthSyncPage