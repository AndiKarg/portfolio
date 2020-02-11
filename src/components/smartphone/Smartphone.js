import React from 'react'
import lorem from 'lorem-ipsum'
import { useSpring, config } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { Device } from './Device'
import { CardBack, Card } from './Cards'

const OFFSET = 90
const SLOW = config.gentle
const FAST = { tension: 2000, friction: 100 }

export default function App() {
  const [{ y }, set] = useSpring(() => ({ y: OFFSET }))
  const bind = useGesture(({ delta: [, y], down }) => set({ y: y > 400 ? 780 : !down ? OFFSET : y + OFFSET, config: !down || y > 400 ? SLOW : FAST }))
  const opacity = y.interpolate([180, 400], [0.2, 1], 'clamp')
  const transform = y.interpolate([OFFSET, 250], [40, 0], 'clamp').interpolate(val => `translate3d(0,${val}px,0)`)
  return (
    <Device>
      <CardBack onClick={() => set({ y: OFFSET })} style={{ opacity, transform }}>
        <h1 style={{ color: 'lightblue' }}>LOREM IPSUM</h1>
        <h2>{lorem({ count: 5 })}</h2>
      </CardBack>
      <Card {...bind()} style={{ transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
        <h1 className="swipe">Runterziehen zum Entsperren</h1>
        <div className="msg">Neue Nachricht vom Boss</div>
      </Card>
    </Device>
  )
}
