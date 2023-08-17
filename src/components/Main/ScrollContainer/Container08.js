import React from 'react'
import '../../../assets/css/Container/Main/Container_08.css'
import Truck from '../../../assets/images/Main/Truck.png'
import Road from '../../../assets/images/Main/Road.png'

function Container08() {
  return (
    <div id="Container08">
      <img src={Road} alt="" />
      <div className="Container08_wrap">
        <img className="truck-image" src={Truck} alt="" />
        <div className="Title_wrap">
          <p className="Main_title Container_08-01">
            박스를 N개 이상 받는
            <br /> 고객경험은 더 이상 그만!
          </p>
          <p className="Sub_title Container_08-02">
            <span> ECO- Friendly 유통경험</span>을 <br />
            나의 고객에게 전달하는 방법을 <br />
            클라우드 풀필먼트에서 시작해보세요.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container08
