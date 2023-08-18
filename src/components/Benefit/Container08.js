import React from 'react'
import '../../assets/css/Container/Benefit/Container_08.css'
import shopingmall from '../../assets/images/Benefit/shopingmall.png'
function Container08() {
  return (
    <div id="Fulfilment-Container08">
      <div className="Container08_Wrap">
        <img src={shopingmall} alt="" />
        <div className="Text_Wrap">
          <p className="contents_01">
            <span>클라우드 풀필먼트 이용 셀러</span>
            <br />
            <span>자동 입점지원 혜택 적용</span>
          </p>
          <p>
            <span>창고 입점시, 셀러(화주)는</span>
            <br />
            <span>자동 입점 진행으로</span>
            <br />
            <span> 추가 수익 창출을 제공합니다.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container08
