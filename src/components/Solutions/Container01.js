import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Solutions/Container_01.css'
import Solutions_Bg from '../../assets/images/Solutions/Solutions_Bg.png'
import Solutions_MobBg from '../../assets/images/Solutions/Solutions_MobBg.png'

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
    <div id="Solutions">
      {isNarrowScreen ? (
        <img src={Solutions_MobBg} alt="" />
      ) : (
        <img src={Solutions_Bg} alt="" />
      )}

      {isNarrowScreen ? (
        <p>
          <span>
            첨단 IT 기술 기반의 <br /> 합포장 센터를 가능하게 한
          </span>
          <br />
          <span>
            클라우드 풀필먼트의 <br /> IT솔루션
          </span>
        </p>
      ) : (
        <p>
          <span>첨단 IT 기술 기반의 합포장 센터를 가능하게 한</span>
          <br />
          <span>클라우드 풀필먼트의 IT솔루션</span>
        </p>
      )}
    </div>
  )
}

export default Container01
