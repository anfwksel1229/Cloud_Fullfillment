import React from 'react'
import '../../assets/css/Container/Benefit/Container_05.css'
import Contents_Icon_03 from '../../assets/images/Benefit/Contents_Icon_03.png'

function Container03() {
  return (
    <div id="Fulfilment-Container05">
      <div className="Container05_Wrap">
        <img src={Contents_Icon_03} alt="" />
        <div className="Text_Wrap">
          <h3>Online Consumer</h3>
          <p>과다 배송비, 중복 배송비에 벗어난 합리적인 소비 경험</p>
          <p>
            분할 배송 및 과대포장 및 분리수거 횟수 인하로 인한 환경보호기여 경험
          </p>
          <p>
            딱 필요한 만큼만 사서 쓰는, 제로 웨이스트 라이프 및 계획적 소비습관
            문화 경험
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container03
