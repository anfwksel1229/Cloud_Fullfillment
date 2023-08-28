import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Solutions/Container_04.css'
import Contenst_01 from '../../assets/images/Solutions/Contenst_01.png'

function Container04() {
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
    <div id="Solutions-Container04">
      {isNarrowScreen ? (
        <div className="Container04_Wrap">
          <div className="Text_Wrap">
            <h3>01</h3>
            <h3>쇼핑몰 통합 관리 솔루션 제공</h3>
            <p>클라우드 풀필먼트, 기존 주문관리/창고관리 솔루션* 100% 호환</p>
          </div>

          <img src={Contenst_01} alt="" />
          <p>* 이지어드민/이지WMS(현재)</p>
        </div>
      ) : (
        <div className="Container04_Wrap">
          <div className="Text_Wrap">
            <h3>01</h3>
            <h3>쇼핑몰 통합 관리 솔루션 제공</h3>
            <p>클라우드 풀필먼트, 기존 주문관리/창고관리 솔루션* 100% 호환</p>
          </div>

          <p>* 이지어드민/이지WMS(현재)</p>
          <img src={Contenst_01} alt="" />
        </div>
      )}
    </div>
  )
}

export default Container04
