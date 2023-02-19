import { useState, useEffect} from 'react'
import { MouseStatus, MousePosition } from './types'
const useMouse = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [mouseStatus, setMouseStatus] = useState<MouseStatus>(null)

  function handleMouseDown() {
    setMouseStatus("mousedown")
  }

  function handleMouseUp() {
    setMouseStatus("mouseup")
  }
  function handleMouseOut() {
    setMousePosition({ x: 0, y: 0 })
    setMouseStatus("mouseup")
  }

  function handleMouseMove(e: any) {
    setMousePosition({
      x: Number(e?.clientX || (e?.touches?.[0]?.clientX) || 0),
      y: Number(e?.clientY || (e?.touches?.[0]?.clientY) || 0),
    })
  }

  useEffect(() => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 768
    if(isDesktop){
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("mouseout", handleMouseOut)
    }
    return () => {
      if(isDesktop){
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [])

  return {
    mousePosition,
    mouseStatus,
  }
}

export default useMouse