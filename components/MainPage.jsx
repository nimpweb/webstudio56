import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/home.module.css';
import Popup from './Popup';
import db from '../db.json'
import Head from 'next/head';


const MainPage = () => {
  const [popupVisible, setPopupVisible] = useState(false)
  return (
    <>
    <Head>
    <meta name="yandex-verification" content="021b41254781ef95" />
    </Head>
        <section className={s.sectionHello}>
          <div className="pageWidthContainer">
            <div className="d-flex h-100">
              <div className={`${s.section_hello_left} h-100`}>
                <h1>Разработка сайтов любой сложности</h1>
                <h4>Это могут быть не только сайты, а также CRM, калькуляторы и т.п.</h4>
                <div className="text-left w-100">
                  <button className={s.section_hello_left_button} onClick={ () => setPopupVisible(true)}>Подать заявку</button>
                  <p className="white-text">
                    <sup>*</sup> Нажимте кнопку чтобы сделать заказ онлайн
                  </p>
                </div>
              </div>
              <div className={`${s.section_hello_right} h-100`}>
                <div className={s.section_hello_right_card}>
                  <div className={s.yearBlock}>
                    <div className={s.yearFlash}>15</div>
                    <div className={s.yearText}>
                      <p>
                        лет <br /> на рынке
                      </p>
                    </div>

                    <div>
                      более <span className="accentText">300</span> довольных клиентов на текущий
                      момент
                    </div>
                    <div style={{ display: 'block', marginTop: '10px' }}>
                      Мы находим решение <strong>для любой компании</strong> быстро и качественно
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.sectionExamples}>
          <div className="pageWidthContainer">
            <h2 className={s.sectionHeader}>Примеры наших работ</h2>
            <p className={s.content}>
              Ознакомьтесь с тем, что наша команда делает. Чтобы получить сайт необходимой
              сложности, Вам не нужно иметь навыки программирования или продвижения. Вы можете
              обратиться к нам и мы Вам обязательно поможем. Наши специалисты подберут и предложат
              подходящий дизайн под Ваш проект и после согласования, проект будет исполнен в течении{' '}
              <Link href="#">
                <strong>2 недель</strong>
              </Link>
              !
            </p>
            <div className={s.worksContainer}>
              { db.sites.map(site => (
                <div key={site.id} className={s.worksItem}>
                <Link href={`/works/${site.id}`}>
                  <a className={s.imageLink} >
                    <Image
                      className={s.worksItemImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      src={site.image}
                      alt={site.title}
                    />
                  </a>
                </Link>
                <h5>{site.title}</h5>
                <p className={s.content}>
                  {site.content}
                </p>
                <p className={s.content}>
                  CMS: <strong>{site.cms}</strong>
                </p>
                <div className={s.buttonsContainer}>
                  <Link className={s.buttonLeft} href={`/works/${site.id}`}>
                    Просмотр
                  </Link>
                  <button className={s.buttonRight}>Хочу такой же</button>
                </div>
              </div>                
              )) }
            </div>
            <div className="text-center mt40">
              Другие варинты вы можете просмотреть{' '}
              <Link rel="norefferer" href="/works">
                здесь
              </Link>
              .
            </div>
          </div>
        </section>

        <section className={s.sectionActivity}>
          <div className="pageWidthContainer">
            <h3>Что мы можем сделать?</h3>
            <h5>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat a amet, quasi
              quisquam laborum, placeat, repudiandae ipsa illo reiciendis facilis blanditiis modi
              eligendi neque aliquid rem exercitationem. Dolorum, ut velit. Mollitia, quos
              architecto. Maiores quia mollitia optio eos nobis consectetur ex ipsum, alias,
              architecto aperiam quibusdam iste omnis? Laboriosam optio iure a illum id odio qui
              sapiente, et molestiae fugiat.
            </h5>
            <div className={s.activityContainer}>
              <Link href="/landing">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Landing Page</span>
                </a>
              </Link>
              <Link href="/business-card">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Визитка</span>
                </a>
              </Link>
              <Link href="/catalog">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Каталог товаров</span>
                </a>
              </Link>
              <Link href="/im">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Интернет-магазин</span>
                </a>
              </Link>
            </div>
            <div className={s.activityContainer}>
              <Link href="/personal-cabinet">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Личные кабинеты</span>
                </a>
              </Link>
              <Link href="/desktop-application">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Прикладные программы</span>
                </a>
              </Link>
              <Link href="/mobile-application">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/landing-page.png"
                    alt="landing"
                  />
                  <span>Мобильные приложения</span>
                </a>
              </Link>
              <Link href="/special-application">
                <a className={s.activityItem}>
                  <Image
                    className={s.icon}
                    width={40}
                    height={40}
                    layout="fixed"
                    src="/images/special-page.png"
                    alt="landing"
                  />
                  <span>Специализированне программы</span>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section id="section_clients"></section>

        <section className={s.sectionOrder}>
          <div className={s.pageWidthContainer}>
            <div className={s.info}>
              <h3>Сделайте первый шаг к привлечению клиентов</h3>
              <h5>Оставьте заявку и мы Вам перезвоним в удобное для Вас время</h5>
            </div>
            <button onClick={() => setPopupVisible(true)}>Оставить заявку</button>
          </div>
        </section>    
        { popupVisible &&  <Popup onClose={() => setPopupVisible(false)} visible={ popupVisible } />}
    </>
  )
}

export default MainPage