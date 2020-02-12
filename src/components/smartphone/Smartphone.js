import React from 'react'
import { useSpring, config } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'
import { Device } from './Device'
import { CardBack, Card } from './Cards'
import './smartphone.css'
import Bg from './img/whatsappbg.png'
import Notch from './img/iphone-x-notch.png'
import Profilepic from './img/unsplash.jpg'
import WhatsappLogo from './img/whatsapp-logo.png'

const OFFSET = 90
const SLOW = config.gentle
const FAST = { tension: 2000, friction: 100 }

export default function App() {
  const [{ y }, set] = useSpring(() => ({ y: OFFSET }))
  const bind = useGesture(({ delta: [, y], down }) => set({ y: y > 400 ? 780 : !down ? OFFSET : y + OFFSET, config: !down || y > 400 ? SLOW : FAST }))
  const opacity = y.interpolate([180, 400], [0.2, 1], 'clamp')
  const transform = y.interpolate([OFFSET, 550], [100, 0], 'clamp').interpolate(val => `translate3d(0,${val}px,0)`)
  return (
    <Device>
      <div className="statusbar" style={{ backgroundImage: 'url(' + Notch + ')' }} />
      <CardBack onClick={() => set({ y: OFFSET })} style={{ opacity, transform, backgroundImage: 'url(' + Bg + ')' }}>
        <div className="chathead">
          <div className="back">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="name">Andreas Karg</div>
          <div className="extra" style={{ backgroundImage: 'url(' + Profilepic + ')' }}></div>
        </div>
        <div className="mainmessage">Schee dasd do bist &#128514; </div>
        <div className="sendcont">
          <div className="inputcont">
            <div className="inputmessage">Hier Nachricht eingeben</div>
            <div className="sendbtn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      </CardBack>
      <Card {...bind()} style={{ transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
        <h1 className="swipe">Runterziehen zum Entsperren</h1>
        <div className="msg">
          <div className="msghead">
            <div className="msghead1">
              <img className="whatsapplogo" src={WhatsappLogo} height="25px" /> Whatsapp
            </div>
            <div className="msghead2">now</div>
          </div>
          <div className="msgcontent">
            <div className="msgpic" style={{ backgroundImage: 'url(' + Profilepic + ')' }}></div>
            <div className="msgelse">
              <div className="msgsender">Andreas Karg</div>
              <div className="msgtext">Schee dasd do bist &#128514;</div>
            </div>
          </div>
        </div>
      </Card>
    </Device>
  )
}
