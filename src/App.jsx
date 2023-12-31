import { useState } from "react"
import Home from "./Component/Home/Home"
import Play from "./Component/Play/Play"

function App() {

  const [play, setPlay] = useState(false)

  const togglePlay = () => {
    setPlay((prev) => !prev)
  }
  return (
    <>
      {
        play? <Play />: <Home togglePlay={togglePlay} />
      }
    </>
  )
}

export default App
