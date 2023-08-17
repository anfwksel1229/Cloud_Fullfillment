import React from 'react'
import '../../../assets/css/Container/Main/Container_05.css'
import Phone_items from '../../../assets/images/Main/Phone_items.png'

function Container05() {
  return (
    <div id="Container05">
      <div className="Container05_wrap">
        <img src={Phone_items} alt="" />
        <div className="Title_wrap">
          <p className="Main_title Container_05-01">
            타사대비, 클라우드 풀필먼트 <br />
            합포장센터를 통한 <br />
            <span>37% 이상 검증된</span> 물류비 절감효과!
          </p>
          <p className="Sub_title Container_05-02">
            모든 접점에서 발생한 고객 정보를 연결해 다양한
            <br />
            분석 결과를 제공하여 고객을 다각도로 이해할 수 있습니다.
          </p>
        </div>
      </div>
      <p className="add_text">
        * 클라우드 풀필먼트 전용 쇼핑몰 운영 결과. 전체 주문의 70% 단건 주문인
        조건 기반 결과.
      </p>
    </div>
  )
}

export default Container05
