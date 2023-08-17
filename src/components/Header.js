import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link, NavLink } from 'react-router-dom'

import '../assets/css/Header.css'

const menuData = [
  {
    title: 'IT솔루션',
    submenu: ['솔루션 1', '솔루션 2', '솔루션 3'],
  },
  {
    title: '풀필먼트',
    submenu: ['서비스 1', '서비스 2', '서비스 3'],
  },
  {
    title: '혜택안내',
    link: '/benefit',
  },
  {
    title: '회사소개',
    submenu: ['회사 소개 1', '회사 소개 2', '회사 소개 3'],
  },
]

function Header() {
  return (
    <div id="Header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="list_wrap">
        <ul>
          {menuData.map((item, index) => (
            <li className="menu_item" key={index}>
              {item.link ? (
                <NavLink to={item.link} activeclassname="activeLink">
                  {item.title}
                </NavLink>
              ) : (
                item.title
              )}
              {item.submenu && (
                <div className="submenu">
                  <ul>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div id="Request">상담신청 바로가기</div>
      </div>
    </div>
  )
}

export default Header
