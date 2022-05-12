import React from 'react'
import Page from '../components/Page'
import Image from 'next/image'
import styled from 'styled-components'

const Services = () => {
  return (
    <Page
      title="Услуги"
      subTitle="которые мы можем Вам оказать"
      breadcrumbs={[
        { title: 'Главная', link: '/'},
        { title: 'Услуги', link: ''},
      ]}
    >
      <div className="pageWidthContainer">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, dolorem odio deleniti explicabo nostrum repellat ipsum voluptatum tempore minima error assumenda doloremque consequuntur inventore cum maxime quaerat vitae. Dolor, aut.
        Odio, harum dolorem magnam sit hic laboriosam vel? Porro alias debitis, temporibus, illo placeat assumenda labore quae eius cupiditate eos animi esse voluptatem molestiae quia aliquid officia? Libero, sunt modi?</p>

        <ServiceContent>

          <ServiceContentItem>
            <Image 
              layout="fixed"
              width={600} height={400}
              src="/images/services/escort.jpg" 
              alt="Сопровождение"  />
            <div>
              <h3>Подключение личного кабинета сетевой компании</h3>
              <Price>от <span>8000</span>?/мес</Price>
              <List>
                <li>Создание учетной записи администратора сетевой компании</li>
                <li>Краткое ознакомление с системой</li>
                <li>Размещение документации Вашей компании</li>
                <li>бла-бла-бла....</li>
                <li>бла-бла-бла....</li>
                <li>бла-бла-бла....</li>
              </List>
              <div className="text-right w-100">
                <a href="https://promo.energy.ru">Подробнее...</a>
              </div>
            </div>
          </ServiceContentItem>

          <ServiceContentItem>
            <div>
              <h3>Контекстная реклама</h3>
              <Price>от <span>6300</span>?/мес</Price>
              <List>
                <li>Ананлиз тематики/сферы деятельности</li>
                <li>Выявление и согласование целей реклманой компании</li>
                <li>Определение и анализ ключевых слов</li>
                <li>Настройка рекламной компании</li>
                <li>Старт рекламной компании</li>
                <li>Анализ действующей рекламной компании</li>
                <li>Оптимизация действующей рекламной компании, снижение цены клика</li>
                <li>Еженедельная отчетность</li>
              </List>
              <div className="text-right w-100">
                <a href="https://promo.energy.ru">Подробнее...</a>
              </div>
            </div>
            <Image 
              layout="fixed"
              width={600} height={400}
              src="/images/services/context.jpeg" 
              alt="Сопровождение"  />
          </ServiceContentItem>

          <ServiceContentItem>
            <Image 
              layout="fixed"
              width={600} height={400}
              src="/images/services/escort.jpg" 
              alt="Сопровождение"  />
            <div>
              <h3>Сопровождение готового сайта</h3>
              <Price>от <span>1500</span>?/мес</Price>
              <List>
                <li>Мониторинг продления доменного имени и услуг хостинга</li>
                <li>Резервное копирование сайта 1 раз в месяц</li>
                <li>Контакт с хостинг-провайдером от имени владельца сайта</li>
                <li>Размещение текстовой информации (обновление, редактирование и исправление до 10 страниц)</li>
                <li>Размещение и оптимизация графических изображений (обрезка, уменьшение и облегчение для WEB стандартов до 10 штук)</li>
                <li>Время реакции на обращение до 2 дней.</li>
              </List>
              <div className="text-right w-100">
                <a href="https://promo.energy.ru">Подробнее...</a>
              </div>
            </div>
          </ServiceContentItem>

        </ServiceContent>
      </div>
    </Page>
  )
}

const ServiceContent = styled.div`
display: flex;
flex-direction: column;
`

const ServiceContentItem = styled.div`
  display: flex;
  flex: 1 1;
  width: 100%;
  gap: 20px;
  margin: 20px 0;
`

const Price = styled.div`
  background-color: var(--hover-color);
  color: white;
  padding: 25px 100px;
  width: fit-content;
  font-size: 24px;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,69,0,1) 50%, rgba(255,255,255,1) 100%);
  & span {
    font-weight: bold;
    color: white;
    font-size: 32px;
    letter-spacing: 2px;
  }
`

const List = styled.ul`
  margin: 20px 15px; 
  & li {
    line-height: 25px;
    margin-bottom: 5px;
  }
`

export default Services