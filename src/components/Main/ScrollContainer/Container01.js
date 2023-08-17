import React from 'react'
import '../../../assets/css/Container/Main/Container_01.css'
import { Link } from 'react-router-dom'
// import Video from '../../../assets/videos/Main_Bg.mp4'

function Container01() {
  return (
    <div id="Main-Container_Wrap">
      <div className="video-container">
        <video src="/videos/Main_Bg.mp4" autoPlay muted loop />
      </div>
      <div id="Container01">
        <p className="Main_title">
          <span>물류비절감과 매출전략을 한번에!</span>
          <br />
          <span>클라우드풀필먼트</span>
        </p>
        <p className="Sub_title">
          물류 시설 투자가 필요없는,첨단 IT 기술 기반의 Green Logistics.
        </p>
        <div className="Link_btn">
          <div className="Solution">
            <Link to="/">IT솔루션 알아보기</Link>
          </div>
          <div className="Request">
            <Link to="/">상담신청 바로가기</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container01
