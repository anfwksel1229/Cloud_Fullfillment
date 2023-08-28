import React, { useEffect, useState } from 'react'
import '../../assets/css/Container/Introduce/Container_02.css'
import Fulfilment from '../../assets/images/Introduce/Fulfilment.png'
import MobFulfilment from '../../assets/images/Introduce/MobFulfilment.png'
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
    <div id="Introduce-Container02">
      <div className="Introduce_Wrap02">
        {isNarrowScreen ? (
          <img src={MobFulfilment} alt="" />
        ) : (
          <img src={Fulfilment} alt="" />
        )}

        <div className="Text_Wrap">
          {isNarrowScreen ? (
            <h3>
              <p>
                매출 상승과 동반 상승하는 <br /> 물류비 고민 끝.
              </p>
              <p> 클라우드 풀필먼트의 파괴적 혁신을 확인하세요!</p>
            </h3>
          ) : (
            <h3>
              매출 상승과 동반 상승하는 물류비 고민 끝.
              <br />
              클라우드 풀필먼트의 파괴적 혁신을 확인하세요!
            </h3>
          )}
          {isNarrowScreen ? (
            <p>
              국내 이커머스 시장은 210조 원으로 성장했지만 매출과 함께 상승하는
              <br />
              물류비 부담으로 이커머스 플랫폼의 영업이익 개선이 쉽지 않습니다.
            </p>
          ) : (
            <p>
              국내 이커머스 시장은 210조 원으로 성장했지만 매출과 함께 상승하는
              물류비 부담으로 <br /> 이커머스 플랫폼의 영업이익 개선이 쉽지
              않습니다.
            </p>
          )}

          <p>
            연간 36억 개의 택배 상자, 부자재 폐기물들도 대폭 증가하고 있으며
            <br />
            이에 대한 소비자들의 환경인식 또한 높아지고 있습니다.
          </p>
          {isNarrowScreen ? (
            <p>
              클라우드 풀필먼트는 수도권역 약 300개 이상의 우수 3PL 창고에 보관
              <br />된 상품 데이터를 연결하고 통합하여 단 1회의 포장과 배송
              절차를 통해,
              <br /> 풀필먼트 업계의 선순환을 제공합니다.
            </p>
          ) : (
            <p>
              클라우드 풀필먼트는 수도권역 약 300개 이상의 우수 3PL 창고에
              보관된 상품 데이터를 연결하고 통합하여 <br />단 1회의 포장과 배송
              절차를 통해, 풀필먼트 업계의 선순환을 제공합니다.
            </p>
          )}
          {isNarrowScreen ? (
            <p>
              대규모 투자로 가격 경쟁력 확보가 쉽지 않은 경쟁 풀필먼트 서비스의
              <br />
              단점을 극복하고 탄소 배출을 절감하는 친환경 풀필먼트
            </p>
          ) : (
            <p>
              대규모 투자로 가격 경쟁력 확보가 쉽지 않은 경쟁 풀필먼트 서비스의
              단점을 극복하고
              <br /> 탄소 배출을 절감하는 친환경 풀필먼트
            </p>
          )}

          <p>
            ㈜하포테크의 독보적인 이커머스 플랫폼 전용 물류 서비스,
            <br />
            클라우드 풀필먼트입니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container02
