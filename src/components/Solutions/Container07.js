import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Solutions/Container_07.css'
import Contenst_04 from '../../assets/images/Solutions/Contenst_04.png'

function Container07() {
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
    <div id="Solutions-Container07">
      <div className="Container07_Wrap">
        {isNarrowScreen ? (
          <div className="Text_Wrap">
            <h3>04</h3>
            <h3>
              초대형 E-commerce,
              <br /> 물류 파트너사 확보
            </h3>
            <p>여태껏 경험해 보지 못한 물류비 절감형 풀필먼트 네트워크</p>
          </div>
        ) : (
          <div className="Text_Wrap">
            <h3>04</h3>
            <h3>초대형 E-commerce, 물류 파트너사 확보</h3>
            <p>여태껏 경험해 보지 못한 물류비 절감형 풀필먼트 네트워크</p>
          </div>
        )}

        <img src={Contenst_04} alt="" />
        {isNarrowScreen ? (
          <p>
            수도권 300+ 3PL 물류 서비스 연결로,
            <strong>친환경 물류비 절감형 풀필먼트</strong>를 제공합니다.
          </p>
        ) : (
          <p>
            수도권 300+ 3PL 물류 서비스 연결로, 친환경 물류비 절감형 풀필먼트를
            제공합니다.
          </p>
        )}
      </div>
    </div>
  )
}

export default Container07
