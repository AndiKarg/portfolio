import React from 'react'
import { useGesture } from 'react-use-gesture'
import { useSpring, a } from 'react-spring'
import './slider.css'

const width = () => window.innerWidth
const imgs = new Array(7).fill().map((_, i) => i)

export default function Slider() {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: { tension: 2000, friction: 250 } }))
  const bind = useGesture({ onWheel: ({ local: [, y] }) => set({ y: y * 1.5 }) })
  const calculateY = y => `translate3d(${-width() * (y < 0 ? imgs.length - 1 : 1) - (y % (width() * (imgs.length - 2)))}px,0,0)`
  return (
    <div {...bind()} class="slider">
      <a.div class="container" style={{ transform: y.interpolate(calculateY) }}>
        {imgs.map(i => (
          <div key={i} class="item" style={{ transform: `translate3d(${i * width()}px,0,0)` }}>
            <span>0{i % 5}</span>
          </div>
        ))}
      </a.div>
      <a.div class="pager" style={{ width: y.interpolate(y => `${((Math.abs(y) % (width() * 4)) / (width() * 4)) * 100}px`) }} />
    </div>
  )
}
