import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Solutions/Container_03.css'
import CloudIntro from '../../assets/images/Solutions/CloudIntro.png'
import MobCloudIntro from '../../assets/images/Solutions/MoblieCloudIntro.png'

function Container03() {
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
    <div id="Solutions-Container03">
      <div className="Container03_Wrap">
        {isNarrowScreen ? (
          <h3>
            클라우드 풀필먼트란
            <br /> 무엇인가요?
          </h3>
        ) : (
          <h3>클라우드 풀필먼트란 무엇인가요?</h3>
        )}

        {isNarrowScreen ? (
          <div className="Cotants_Wrap">
            <img src={MobCloudIntro} alt="" />
          </div>
        ) : (
          <div className="Cotants_Wrap">
            <img src={CloudIntro} alt="" />
            <div className="Text_Wrap">
              <ul>
                <li>
                  <p>비교불가</p>
                  <span>
                    7,000+ 개의 셀러,화주가
                    <br />
                    사용하는 주문관리
                    <br />
                    솔루션 100% 호환
                  </span>
                </li>
                <li>
                  <p>안전/신뢰</p>
                  <span>
                    약 2억개의 상품을 처리하는
                    <br />
                    수도권 300+개
                    <br />
                    연합 3PL과 함께합니다.
                  </span>
                </li>
                <li>
                  <p>경제적</p>
                  <span>
                    시설 비용없이
                    <br />
                    물류비 절감과
                    <br />
                    환경고려까지 가능한
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Container03
