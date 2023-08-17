import React from 'react'
import '../../../assets/css/Container/Main/Container_04.css'
import Box_items from '../../../assets/images/Main/Box_items.png'

function Container04() {
  return (
    <div id="Container04">
      <div className="Container04_wrap">
        <div className="Title_wrap">
          <p className="Main_title Container_04-01">
            흩어져 있는 창고 물품을 모아
            <br />
            <span>한번에 배송해요!</span>
          </p>
          <p className="Sub_title Container_04-02">
            모든 접점에서 발생한 고객 정보를 연결해 다양한 분석 결과를
            <br />
            제공하여 고객을 다각도로 이해할 수 있습니다.
          </p>
        </div>
        <img src={Box_items} alt="" />
      </div>
    </div>
  )
}

export default Container04
