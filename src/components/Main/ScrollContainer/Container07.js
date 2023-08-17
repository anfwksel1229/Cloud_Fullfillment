import React from 'react'
import '../../../assets/css/Container/Main/Container_07.css'
import Check from '../../../assets/images/Main/Check.png'
import CheckBox from '../../../assets/images/Main/CheckBox.png'

function Container07() {
  return (
    <div id="Container07">
      <div className="Container07_wrap">
        <div className="Title_wrap">
          <p className="Main_title Container_07-01">
            불필요한 박스.부자재도 <span>1개로만!</span> <br />
            배송비도 <span>1번만!</span>
          </p>
          <p className="Sub_title Container_07-02">
            최첨단 IT기술 기반의 합포센터를 통해, <br />
            ECO 유통구조와, 합리적 소비경험을 한번에!
          </p>
        </div>
        <div className="CheckBox">
          <img className="Container_07-03" src={Check} alt="" />
          <img src={CheckBox} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Container07
