import React from 'react'
import '../../../assets/css/Container/Main/Container_03.css'
import ic_01 from '../../../assets/images/Main/ic_01.png'
import ic_02 from '../../../assets/images/Main//ic_02.png'
import ic_03 from '../../../assets/images/Main/ic_03.png'

function Container03() {
  return (
    <div id="Container03">
      <p className="Main_title Container_03-01">
        300개의 창고를 1개의 창고처럼 사용하며
      </p>

      <div className="icon_container Container_03-02">
        <ul>
          <li>
            <div>
              <img src={ic_01} alt="" />
              <p>
                <span>물류비</span>는 확 줄이고!
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={ic_02} alt="" />
              <p>
                <span>환경보호</span>는 올리고!
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={ic_03} alt="" />
              <p>
                <span>고객경험</span>도 올리고!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Container03
