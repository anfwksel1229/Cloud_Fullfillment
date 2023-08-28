import React, { useEffect, useState } from 'react'
import '../assets/css/Footer.css'
import Footer_Logo from '../assets/images/Footer_Logo.png'

function Footer() {
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
    <div id="Footer">
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
            <img src={Footer_Logo} alt="" />

            <div className="List_Wrap">
              <ul>
                <p>풀필먼트</p>
                <li>물류대행</li>
                <li>포장 · 택배</li>
                <li>소분 · 합포장 대행</li>
                <li>물류운영 프로세스</li>
              </ul>
              <ul>
                <p>혜택안내</p>
                <li>온라인셀러</li>
                <li>온라인 리테일 스토어</li>
                <li>온라인 컨슈머</li>
                <li>풀필먼트 (3pl)</li>
                <li>자체 B2C몰 입점지원</li>
              </ul>
              <ul>
                <p>IT 솔루션</p>
                <li>이지어드민</li>
                <li>3PL파트너사</li>
                <li>통포장센터</li>
                <li>매출전략</li>
              </ul>
              <ul>
                <p>회사소개</p>
                <li>회사 소개</li>
                <li>요금문의</li>
              </ul>
            </div>
          </div>

          <p>
            클라우드풀필먼트 ㅣ 대표: 김보규 ㅣ 이메일: bkim@happotech.net ㅣ
            사업자등록번호: 108-86-18448
          </p>
          <p className="Copyright">
            Copyright cloud fulfillment Co., All right reserved.
          </p>
        </div>
      )}
    </div>
  )
}

export default Footer
