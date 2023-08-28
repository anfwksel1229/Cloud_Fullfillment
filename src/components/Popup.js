import React, { useState } from 'react'
import '../assets/css/Popup.css'
import Container from '../assets/images/Popup/Container.png'
import Popup_Logo from '../assets/images/Popup/Popup_Logo.png'
import Close_Btn from '../assets/images/Popup/Close_Btn.png'
import { Link } from 'react-router-dom'

function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div style={{ display: isPopupOpen ? 'block' : 'none' }}>
      <div id="PopupOverlay"></div>
      <div id="PopupContent">
        <img src={Popup_Logo} alt="" />
        <img src={Close_Btn} alt="" onClick={closePopup} />
        <div className="Contents_Wrap">
          <img src={Container} alt="" />
          <div className="Contents_Wrapper">
            <p>
              전국 300+개의 창고와 간선연결로
              <br />
              공간제약, 물류비 걱정없는
              <br />
              합리적인 파트너가 필요하신가요?
            </p>
          </div>
          <div className="Request">
            <Link to="https://forms.gle/1AR8QiJ2CEs88ZE16">
              상담신청 바로가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
