import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Popup from '../components/Popup'
import s from '../styles/topHeader.module.css'

function TopHeader() {

  const [popupVisible, setPopupVisible] = useState(false)

  return (
    <div className="pageWidthContainer">
      <header className={s.header}>
        <div className={s.headerLeft}>
          <div className={s.headerLogo}>
            <Link href="/">
              <a>
                <Image layout="fixed" width={102} height={42} src="/images/logo.png" alt="Webstudio56" />
              </a>
            </Link>
          </div>
          <div className={s.headerMenuContainer}>
            <Link href="/services"><a className={s.headerMenuLink}>Услуги</a></Link>
            <Link href="/clients"><a className={s.headerMenuLink}>Наши клиенты</a></Link>
            <Link href="/works"><a className={s.headerMenuLink}>Наши работы</a></Link>
            <Link href="/projects"><a className={s.headerMenuLink}>Наши личные проекты</a></Link>
          </div>
        </div>
        <div className={s.headerRight}>
          <Link className={s.headerMenuLink} href="tel:89228960175">+7(922)896-01-75</Link>
          <div>
            <button className={s.headerMenuButton} onClick={ () => setPopupVisible(true)}>Подать заявку</button>
            { popupVisible &&  <Popup onClose={() => setPopupVisible(false)} visible={ popupVisible } />}
          </div>
        </div>
    </header>
  </div>
  )
}

export default TopHeader