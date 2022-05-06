import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

import './style.css'

export default function App({
    front,
    frontClassName,
    back,
    backClassName
}) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className="flipcard-container" onClick={() => set(state => !state)}>
      <a.div
        className={"flipcard-c "+frontClassName}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
          {front}
      </a.div>
      <a.div
        className={"flipcard-c "+backClassName}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
          {back}
      </a.div>
    </div>
  )
}