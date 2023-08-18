import React from 'react'
import '../../assets/css/Container/Solutions/Container_05.css'
import Contenst_02 from '../../assets/images/Solutions/Contenst_02.png'

function Container05() {
  return (
    <div id="Solutions-Container05">
      <div className="Container05_Wrap">
        <div className="Text_Wrap">
          <h3>02</h3>
          <h3>물류 업무 현황 실시간 확인 가능</h3>
          <p>어디서나 모바일 접속을 통해 업무 확인</p>
        </div>

        <img src={Contenst_02} alt="" />
      </div>
    </div>
  )
}

export default Container05
