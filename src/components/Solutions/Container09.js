import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Solutions/Container_09.css'
import Contents_06_01 from '../../assets/images/Solutions/Contents_06_01.png'
import Contents_06_02 from '../../assets/images/Solutions/Contents_06_02.png'
import Contents_06_03 from '../../assets/images/Solutions/Contents_06_03.png'
import Mobile_Contents_06_01 from '../../assets/images/Solutions/Mobile_Contents_06_01.png'
import Mobile_Contents_06_02 from '../../assets/images/Solutions/Mobile_Contents_06_02.png'
import Mobile_Contents_06_03 from '../../assets/images/Solutions/Mobile_Contents_06_03.png'

function Container09() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isNarrowScreen = windowWidth <= 769

  return (
    <div id="Solutions-Container09">
      {isNarrowScreen ? (
        <div className="Container09_Wrap">
          <div className="Text_Wrap">
            <h3>06</h3>
            <h3>배송비도 한번, 매출전략도 한번에!</h3>
            <p>요즘 배송비에 민감한 이탈유저들의 마음을 사로잡는 전략</p>
            <p>
              수도권 300+ 3PL 물류 서비스 연결로,
              <br />
              친환경 물류비 절감형 풀필먼트를 제공합니다.
            </p>
          </div>
          <img src={Mobile_Contents_06_01} alt="" />
        </div>
      ) : (
        <div className="Container09_Wrap">
          <div className="Text_Wrap">
            <h3>06</h3>
            <h3>초대형 E-commerce, 물류 파트너사 확보</h3>
            <p>여태껏 경험해 보지 못한 물류비 절감형 풀필먼트 네트워크</p>
          </div>
          <img src={Contents_06_01} alt="" />
        </div>
      )}
      {isNarrowScreen ? (
        <div>
          <img src={Mobile_Contents_06_02} alt="" />
          <img src={Mobile_Contents_06_03} alt="" />
        </div>
      ) : (
        <div>
          <img src={Contents_06_02} alt="" />
          <img src={Contents_06_03} alt="" />
        </div>
      )}
    </div>
  )
}

export default Container09
