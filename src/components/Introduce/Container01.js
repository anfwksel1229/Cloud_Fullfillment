import React from 'react'
import '../../assets/css/Container/Introduce/Container_01.css'
import Introduce_Bg from '../../assets/images/Introduce/Introduce_Bg.png'

function Container01() {
  return (
    <div id="Introduce">
      <img src={Introduce_Bg} alt="" />
      <p>
        <span>‘연결’과 ‘통합‘ 기술로 제공되는</span>
        <span>Green Logistics</span>
      </p>
    </div>
  )
}

export default Container01
