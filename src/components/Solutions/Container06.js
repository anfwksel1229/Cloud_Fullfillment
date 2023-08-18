import React from 'react'
import '../../assets/css/Container/Solutions/Container_06.css'
import Contenst_03 from '../../assets/images/Solutions/Contenst_03.png'

function Container06() {
  return (
    <div id="Solutions-Container06">
      <div className="Container06_Wrap">
        <div className="Text_Wrap">
          <h3>03</h3>
          <h3>상품별 유통기한 및 LOT 관리 가능</h3>
          <p>리콜 상품 타겟 회수, 단일 바코드, 구매자 추적까지 가능</p>
        </div>
        <img src={Contenst_03} alt="" />
      </div>
    </div>
  )
}

export default Container06
