import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/Logo.png'
import MobLogo from '../assets/images/MobLogo.png'
import { Link } from 'react-router-dom'
import '../assets/css/Header.css'

const menuData = [
  {
    title: '풀필먼트',
    submenu: [
      { title: '물류대행', link: '/introduce/fulfilment' },
      { title: '소분 · 합포장 대행', link: '/introduce/some-link' },
      { title: '물류운영 프로세스', link: '/introduce/other-link' },
    ],
    link: '/',
  },
  {
    title: 'IT솔루션',
    submenu: [
      { title: 'WMS 어드민', link: '#Solutions-Container04' },
      { title: '3PL파트너사', link: '#Solutions-Container07' },
      { title: '통합포장센터', link: '#Solutions-Container08' },
      { title: '매출전략', link: '#Solutions-Container09' },
    ],
    link: '/solution',
  },
  {
    title: '혜택안내',
    submenu: [
      { title: '풀필먼트 (3PL)', link: '#Fulfilment-Container03' },
      { title: '온라인 리테일 스토어', link: '#Fulfilment-Container04' },
      { title: '온라인 컨슈머', link: '#Fulfilment-Container05' },
      { title: '온라인셀러', link: '#Fulfilment-Container06' },
      { title: '자체 B2C몰 입점지원', link: '#Fulfilment-Container07' },
    ],
    link: '/benefit',
  },
  {
    title: '회사소개',
    submenu: [
      { title: '풀필먼트 소개', link: '#Introduce-Container02' },
      { title: '요금문의', link: '/' },
    ],
    link: '/introduce',
  },
  // 나머지 메뉴 항목들도 동일한 방식으로 추가
]

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 메뉴 열림/닫힘 상태를 추가합니다.

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

  const handleMenuClick = (index, link, event) => {
    if (link.startsWith('#')) {
      event.preventDefault()
      const targetId = link.slice(1) // '#' 제거한 아이디명
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    setActiveSubMenu(index)

    setIsMenuOpen(false) // 메뉴 항목을 클릭할 때 메뉴 닫기
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="Header">
      <Link to="/">
        {isNarrowScreen ? (
          <img src={MobLogo} alt="" />
        ) : (
          <img src={Logo} alt="" />
        )}
      </Link>

      {isNarrowScreen ? (
        <div className="list_wrap">
          <div id="Request">
            <Link to="https://forms.gle/1AR8QiJ2CEs88ZE16">
              상담신청 바로가기
            </Link>
          </div>

          <button class="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>

          <ul
            id="menu"
            className={`mobile-menu ${isMenuOpen ? 'menu-open' : ''}`}
          >
            {menuData.map((item, index) => (
              <li
                className={`hamburger_menu_item ${
                  activeSubMenu === index ? 'active' : ''
                }`}
                key={index}
              >
                <Link
                  to={item.link}
                  onClick={(event) => handleMenuClick(index, item.link, event)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="list_wrap">
          <ul>
            {menuData.map((item, index) => (
              <li
                className={`menu_item ${
                  activeSubMenu === index ? 'active' : ''
                }`}
                key={index}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    onClick={(event) =>
                      handleMenuClick(index, item.link, event)
                    }
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
                {item.submenu && activeSubMenu === index && (
                  <div className="submenu">
                    <ul>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            onClick={(event) =>
                              handleMenuClick(index, subItem.link, event)
                            }
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div id="Request">
            <Link to="https://forms.gle/1AR8QiJ2CEs88ZE16">
              상담신청 바로가기
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
