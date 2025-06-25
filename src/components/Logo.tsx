/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { logo } from "@/assets"

const Logo = () => {
  return (
    <div className="flex items-center gap-3 font-semibold text-lg">
        <img src={logo} alt="Task AI" className="w-6 h-6" />
    </div>
  )
}

export default Logo