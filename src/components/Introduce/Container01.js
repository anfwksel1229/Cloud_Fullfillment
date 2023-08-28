import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Introduce/Container_01.css'
import Introduce_Bg from '../../assets/images/Introduce/Introduce_Bg.png'
import Introduce_MobBg from '../../assets/images/Introduce/Introduce_MobBg.png'

function Container01() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isNarrowScreen = windowWidth <= 769

  return (
    <div id="Introduce">
      {isNarrowScreen ? (
        <img src={Introduce_MobBg} alt="" />
      ) : (
        <img src={Introduce_Bg} alt="" />
      )}
      {isNarrowScreen ? (
        <p>
          <span>
            ‘연결’과 ‘통합‘ 기술로
            <br /> 제공되는
          </span>
          <br />
          <span>Green Logistics</span>
        </p>
      ) : (
        <p>
          <span>‘연결’과 ‘통합‘ 기술로 제공되는</span>
          <span>Green Logistics</span>
        </p>
      )}
    </div>
  )
}

export default Container01
