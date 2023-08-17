import React from 'react'
import '../../assets/css/Container/Benefit/Container_04.css'
import Contents_Icon_02 from '../../assets/images/Benefit/Contents_Icon_02.png'

function Container04() {
  return (
    <div id="Fulfilment-Container04">
      <div className="Container04_Wrap">
        <img src={Contents_Icon_02} alt="" />
        <div className="Text_Wrap">
          <h3>Online Retail Store</h3>
          <p>대규모 CAPEX 투자 없이, 현재 풀필먼트 인프라로 물류비 절감 가능</p>
          <p>
            절감된 이익 활용을 기반으로, 판매, 매출 상승 전략에만 집중
            가능하도록, Support
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container04
