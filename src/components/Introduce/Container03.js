import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Introduce/Container_03.css'
import Vector from '../../assets/images/Introduce/Vector.png'
import Footer02 from '../Footer02'
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
    <div id="Introduce-Container03">
      <div className="Introduce_Wrap03">
        <div className="Contents_Wrap">
          <img src={Vector} alt="" />
          <div className="Text_Wrap">
            <p>물류비 절감과, 매출상승의 시작.</p>
            {isNarrowScreen ? (
              <p>
                <span>클라우드 풀필먼트</span>가<br /> 함께합니다.
              </p>
            ) : (
              <p>
                <span>클라우드 풀필먼트</span>가 함께합니다.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer02 />
    </div>
  )
}

export default Container03
