import React from 'react'
import '../../assets/css/Container/Benefit/Container_03.css'
import Contents_Icon_01 from '../../assets/images/Benefit/Contents_Icon_01.png'

function Container03() {
  return (
    <div id="Fulfilment-Container03">
      <div className="Container03_Wrap">
        <img src={Contents_Icon_01} alt="" />
        <div className="Text_Wrap">
          <h3>Fulfilment (3PL)</h3>
          <p>SKU 수 증가 및 다양화로, 물동량 증가 = 매출확대로의 기회</p>
          <p>
            대형 온라인 리테일 스토어, 오픈마켓의 다수 요구사항 대비 업무량 감소
          </p>
          <p>IT기술기반 풀필먼트로, 불필요 인력 및 인건비 절감 가능</p>
        </div>
      </div>
    </div>
  )
}

export default Container03
