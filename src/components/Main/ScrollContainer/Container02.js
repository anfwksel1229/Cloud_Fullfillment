import React from 'react'
// import gsap from 'gsap'
import '../../../assets/css/Container/Main/Container_02.css'
// import Cycle from '../../assets/images/Cycle.png'

function Container02() {
  return (
    <div id="Container02">
      <p className="Sub_title Container_02-01">
        클라우드 풀필먼트만의 최첨단 IT솔루션 기반으로,
      </p>
      <p className="Main_title Container_02-02">
        <span className="gradient">물류비 절감과,</span>
        <br />
        <span className="gradient">매출상승전략을 </span>
        <span>한번에!</span>
      </p>
      <div className="Soultion Container_02-03">
        <p>매출상승 전략</p>
        <div className="Cycle">
          <p>IT솔루션</p>
        </div>
        <p>물류비 절감</p>
      </div>
    </div>
  )
}

export default Container02
