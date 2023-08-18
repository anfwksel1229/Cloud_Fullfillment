import React from 'react'
import '../../assets/css/Container/Solutions/Container_08.css'
import Contenst_05_01 from '../../assets/images/Solutions/Contenst_05_01.png'
import Contenst_05_02 from '../../assets/images/Solutions/Contenst_05_02.png'

function Container08() {
  return (
    <div id="Solutions-Container08">
      <div className="Container08_Wrap">
        <div className="Text_Wrap">
          <h3>05</h3>
          <h3>
            타사 대비, 클라우드 풀필먼트 합포장 센터를 통한
            <br />
            37% 이상 검증된 물류비 절감 효과!
          </h3>
        </div>
      </div>
      <div className="Contents_Wrap">
        <div>
          <img src={Contenst_05_01} alt="" />
        </div>
      </div>

      <p>
        * 클라우드 풀필먼트 전용 쇼핑몰 1개월 자체 운영 결과(전체 주문의 30%
        합포장 처리 기준)
      </p>

      <div>
        <img src={Contenst_05_02} alt="" />
      </div>
    </div>
  )
}

export default Container08
