import React from 'react'
import Image from 'next/image'
import Page from '../components/Page'
import BusinessCardImage from '/public/images/categories/business-card.jpg'

const BusinessCard = () => {
  return (
    <Page 
    title="Сайт-визитка компании" 
    subTitle="Что это и для чего он нужен?"
    breadcrumbs={[
      { title: 'Главная', link: '/'},
      { title: 'Сайт-визитка', link: ''},
    ]}
  >
    <div className="pageWidthContainer">
      <div className="d-flex" style={{gap: 20, marginBottom: 20}}>
        <Image 
          layout="fixed"
          width={400}
          height={200}
          src={BusinessCardImage}
          placeholder="blur"
          alt="Сайт-визитка"
        />
        <div>
          <p>Лендинг — это одностраничный сайт, который побуждает посетителя к действию: купить, зарегистрироваться, оставить заявку, подписаться.</p>
          <p>Лендинг используют в маркетинге для рекламы и продажи товара или услуги, сбора контактных данных потенциальных покупателей (лидов), проверки вероятного спроса.</p>
          <p>Лендинг пейдж (англ. landing page — посадочная страница) презентует продукт, снимает возражения и подводит пользователя к целевому действию.</p>
        </div>
      </div>
      <h3>Кому нужен сайт-визитка?</h3>
      <p>Потенциальные клиенты с официального сайта компании банально получают информацию о режиме работы, предоставляемых услугах, ценах. Справедливости ради стоит также отметить, что интернет-реклама в большинстве случаев показывает себя эффективнее, чем разного рода каналы оффлайн рекламы, включая теле-, радио- и т. д. Да и стоит дешевле. Ее без сайта не запустить.</p>
      <p>А если компания, к тому же, относится к какой-либо низкоконкурентной тематике, либо находится в небольшой городе, то чего вы ждёте вообще, я не пойму? Стоит ли писать о том, что в такой ситуации владельцы бизнеса теряют немалый процент своих потенциальных клиентов и свой доход? Думаю, это и без того понятно. Да, на первый взгляд может показаться, что дела идут хорошо, и к вам обращаются за товарами/услугами. Но при помощи сайта клиентов может быть еще больше!</p>

      <h3>Что представляет собой сайт-визитка?</h3>
      <p>Сайт-визитка –как правило, это одна или несколько страниц в интернете, размещенных по одному доменному имени, и несущая на себе информацию о владельце, основной перечень услуг, товаров, контактные данные и раздел с ответами на основные вопросы. Задача сайта-визитки – дать пользователю максимально полный перечень информации о компании или частном лице.</p>
      <p>В связи с этим может возникнуть вопрос, чем же тогда сайт-визитка отличается от лендинга и корпоративного сайта? Разберём ниже.</p>

    </div>
  </Page>
  )
}

export default BusinessCard