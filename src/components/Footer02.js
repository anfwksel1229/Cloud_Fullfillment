import React, { useEffect, useState } from 'react'
import '../assets/css/Footer02.css'

function Footer02() {
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
    <div id="Footer_02">
      {isNarrowScreen ? (
        <div className="Footer_Wrap">
          <p className="title">클라우드풀필먼트 </p>
          <ul>
            <li>대표: 김보규</li>
            <li> 이메일: bkim@happotech.net</li>
            <li>사업자등록번호: 108-86-18448</li>
          </ul>
          <p className="Copyright">
            Copyright cloud fulfillment Co., All right reserved.
          </p>
        </div>
      ) : (
        <div className="Footer_Wrap">
          <div className="Contents_Wrap">
            <p>
              클라우드풀필먼트 ㅣ 대표: 김보규 ㅣ 이메일: bkim@happotech.net ㅣ
              사업자등록번호: 108-86-18448
            </p>
          </div>
          <p className="Copyright">
            Copyright cloud fulfillment Co., All right reserved.
          </p>
        </div>
      )}
    </div>
  )
}

export default Footer02
