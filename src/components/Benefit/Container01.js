import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Benefit/Container_01.css'
import Benefit_Bg from '../../assets/images/Benefit/Benefit_Bg.png'
import Benefit_MobBg from '../../assets/images/Benefit/Benefit_MobBg.png'
function Container_01() {
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
    <div id="Fulfilment">
      {isNarrowScreen ? (
        <img src={Benefit_MobBg} alt="" />
      ) : (
        <img src={Benefit_Bg} alt="" />
      )}

      {isNarrowScreen ? (
        <p>
          쇼핑몰 · 화주 · 고객
          <br />
          모두가 만족하는 <br />
          <span>클라우드 풀필먼트의 혜택</span>
        </p>
      ) : (
        <p>
          쇼핑몰 · 화주 · 고객
          <br />
          모두가 만족하는 <span>클라우드 풀필먼트의 혜택</span>
        </p>
      )}
    </div>
  )
}

export default Container_01
