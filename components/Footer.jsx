import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from '../styles/footer.module.css'

const Footer = () => {
  return (
<footer className={s.footer}>
    <div className="pageWidthContainer">
      <div className={s.footerContainer}>
        <div className={s.footerItem}>
          <Link href="/">
            <Image layout="fixed" width={102} height={42} src="/images/logo.png" alt="Webstudio56" />
          </Link>
          <div className={s.copyInfo}>
            WebStudio56 &copy;{ new Date().getFullYear() } <br />
            Все права защищены
          </div>
          <Link href="/ability">Возможности</Link>
          <Link href="/we">Наша команда</Link>
        </div>
        <div className={s.footerItem}>
          <h3>Основные</h3>
          <Link href="#">Услуги</Link>
          <Link href="#">Тарифы</Link>
          <Link href="#">Договор-оферта</Link>
        </div>
        <div className={s.footerItem}>
          <h3>Продукты</h3>
          <Link href="#">Примеры работ</Link>
          <Link href="#">Отзывы</Link>
          <Link href="#">Партнеры</Link>
        </div>
        <div className={s.footerItem}>
          <h3>Поддержка</h3>
          <p>Телефон: <Link href="tel:89228960175">8-922-896-01-75</Link></p>
          <p>Email: <Link href="mailto:nimpweb@yandex.ru">nimpweb@yandex.ru</Link></p>
          <Link href="/contacts">Контакты</Link>
          <Link href="/partners">Партнеры</Link>
        </div>
      </div>
      <p className={s.policyText}>Заполняя и отправляя любые данные в формах, вы принимаете <a href="#">Положение</a> и <a href="#">Согласие</a> на обработку персональных данных.</p>
    </div>
  </footer>
  )
}

export default Footer