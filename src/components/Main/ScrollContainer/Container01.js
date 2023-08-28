import React, { useState, useEffect } from 'react'
import '../../../assets/css/Container/Main/Container_01.css'
import { Link } from 'react-router-dom'
// import Video from '../../../assets/videos/Main_Bg.mp4'

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
    <div id="Main-Container_Wrap">
      {isNarrowScreen ? (
        <div className="video-container">
          <video src="/videos/MobMain_Bg.mp4" autoPlay muted loop />
        </div>
      ) : (
        <div className="video-container">
          <video src="/videos/Main_Bg.mp4" autoPlay muted loop />
        </div>
      )}

      <div id="Container01">
        {isNarrowScreen ? (
          <div className="Main_title">
            <p>
              물류비절감과 <br /> 매출전략을 한번에!
            </p>
            <p>클라우드풀필먼트</p>
          </div>
        ) : (
          <p className="Main_title">
            <span>물류비절감과 매출전략을 한번에!</span> <br />
            <span>클라우드풀필먼트</span>
          </p>
        )}
        {isNarrowScreen ? (
          <p className="Sub_title">
            물류 시설 투자가 필요없는,
            <br />
            첨단 IT 기술 기반의 Green Logistics.
          </p>
        ) : (
          <p className="Sub_title">
            물류 시설 투자가 필요없는,첨단 IT 기술 기반의 Green Logistics.
          </p>
        )}
        <div className="Link_btn">
          <div className="Solution">
            <Link to="/solution">IT솔루션 알아보기</Link>
          </div>
          <div className="Request">
            <Link to="https://forms.gle/1AR8QiJ2CEs88ZE16">
              상담신청 바로가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container01
