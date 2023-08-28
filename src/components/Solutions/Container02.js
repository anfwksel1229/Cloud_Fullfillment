import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Solutions/Container_02.css'
import Container from '../../assets/images/Solutions/Container.png'

function Container02() {
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
    <div id="Solutions-Container02">
      <div className="Container02_Wrap">
        <img src={Container} alt="" />
        {isNarrowScreen ? (
          <div className="Text_Wrap">
            <h3>
              셀러와 창고의 IT솔루션
              <br />
              <span>100% 호환</span>
            </h3>
            <p>
              원스톱 주문처리부터
              <br />
              스마트 재고관리, 매출 관리, <br />
              정산 통계를 한 번에!
            </p>
            <span>
              수도권 300+개의 3PL 창고를 연결하여, 하나의 대형 단일 창고를
              운영합니다.
            </span>
          </div>
        ) : (
          <div className="Text_Wrap">
            <h3>셀러와 창고의 IT솔루션 100% 호환</h3>
            <p>
              원스톱 주문처리부터
              <br />
              스마트 재고관리, 매출 관리, 정산 통계를 한 번에!
            </p>
            <span>
              수도권 300+개의 3PL 창고를 연결하여,{' '}
              <strong>하나의 대형 단일 창고</strong>를 운영합니다.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Container02
