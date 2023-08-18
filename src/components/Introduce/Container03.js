import React from 'react'
import '../../assets/css/Container/Introduce/Container_03.css'
import Vector from '../../assets/images/Introduce/Vector.png'
import Footer02 from '../Footer02'
function Container03() {
  return (
    <div id="Introduce-Container03">
      <div className="Introduce_Wrap03">
        <div className="Contents_Wrap">
          <img src={Vector} alt="" />
          <div className="Text_Wrap">
            <p>물류비 절감과, 매출상승의 시작.</p>
            <p>
              <span>클라우드 풀필먼트</span>가 함께합니다.
            </p>
          </div>
        </div>
      </div>
      <Footer02 />
    </div>
  )
}

export default Container03
