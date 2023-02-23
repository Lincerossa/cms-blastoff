import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import * as S from './styles'

const Pointer = () => {
  const [{ clientX: left, clientY: top }, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  })
  const styles = useSpring({ from: { left: 0, top: 0 }, to: { left, top } })
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 768) {
      return
    }
    window.addEventListener('mousemove', setMousePosition)
    return () => window.removeEventListener('mousemove', setMousePosition)
  }, [])

  return (
    <>
      <S.MousePoint style={{ left, top }} />
      <animated.div style={{ position: 'fixed', zIndex: 3, ...styles }}>
        <S.MouseTracker />
      </animated.div>
    </>
  )
}

export default Pointer
