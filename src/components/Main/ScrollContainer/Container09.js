import React, { useEffect, useState } from 'react'
import '../../../assets/css/Container/Main/Container_09.css'
import Vector from '../../../assets/images/Main/Vector.png'
import Footer from '../../Footer'

function Container08() {
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
    <div id="Last_Wrapper">
      <div id="Container09">
        <div className="Container09_wrap">
          <img className="Container_09-01" src={Vector} alt="" />
          <div className="Title_wrap Container_09-02">
            <p className="Sub_title">물류비 절감과, 매출상승의 시작.</p>
            {isNarrowScreen ? (
              <p className="Main_title">
                <span>클라우드 풀필먼트</span>가<br /> 함께합니다.
              </p>
            ) : (
              <p className="Main_title">
                <span>클라우드 풀필먼트</span>가 함께합니다.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Container08
