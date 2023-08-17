import React from 'react'
import '../../../assets/css/Container/Main/Container_06.css'
import Cloud_img from '../../../assets/images/Main/Cloud_img.png'

function Container06() {
  return (
    <div id="Container06">
      <div className="Container06_wrap">
        <div className="Title_wrap">
          <p className="Main_title Container_06-01">
            창고,대형 물류센터 잡화장 연결
            <br />
            간석트럭 이용 회수 &nbsp;
            <span>55% 감소!</span>
          </p>
          <p className="Sub_title Container_06-02">
            모든 접점에서 발생한 고객 정보를 연결해 다양한 분석 결과를
            <br />
            제공하여 고객을 다각도로 이해할 수 있습니다.
          </p>
        </div>
        <img className="Container_06-03" src={Cloud_img} alt="" />
      </div>
    </div>
  )
}

export default Container06
