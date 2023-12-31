import React, { useEffect, useState } from 'react'
import '../../../assets/css/Container/Main/Container_06.css'
import Cloud_img from '../../../assets/images/Main/Cloud_img.png'
import MobCloud_img from '../../../assets/images/Main/MobCloud_img.png'

function Container06() {
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
    <div id="Container06">
      <div className="Container06_wrap">
        <div className="Title_wrap">
          {isNarrowScreen ? (
            <p className="Main_title Container_06-01">
              3PL 창고, 대형 물류센터 집하장 <br /> 연결 간선트럭 이용 회수
              <br />
              <span>55% 감소!</span>
            </p>
          ) : (
            <p className="Main_title Container_06-01">
              3PL 창고,
              <br />
              대형 물류센터 집하장 연결
              <br />
              간선트럭 이용 회수 &nbsp;
              <span>55% 감소!</span>
            </p>
          )}

          {/* <p className="Sub_title Container_06-02">
            모든 접점에서 발생한 고객 정보를 연결해 다양한 분석 결과를
            <br />
            제공하여 고객을 다각도로 이해할 수 있습니다.
          </p> */}
        </div>
        {isNarrowScreen ? (
          <img className="Container_06-03" src={MobCloud_img} alt="" />
        ) : (
          <img className="Container_06-03" src={Cloud_img} alt="" />
        )}
      </div>
    </div>
  )
}

export default Container06
