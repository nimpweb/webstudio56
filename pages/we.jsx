import React from 'react'
import Page from '../components/Page'
import Image from 'next/image'
import styled from 'styled-components'


const We =() => {
  return (
    <Page 
      title="Наша команда" 
      breadcrumbs={[
        { title: 'Главная', link: '/'},
        { title: 'Наша команда', link: ''},
      ]}
    >
      <div className="pageWidthContainer">
        <p>Наш офис находится в центре города Оренбурга, на пересечении улиц Цвиллига и Рыбаковской. Мы работаем ежедневно, но в выходные дни исключительно по электронной почте или телефону. Техническая поддержка наших сайтов, которые находятся на обслуживании осуществляется круглосуточно.</p>
        <p>На текущий момент в компании работают три сотрудника, которые выполняют поставленные задачи на высоком уровне.</p>
        <div>
          <ContentItem>
            <ImageContainer>
              <Image 
                layout="fill" 
                src="/images/command/command_1.jpg" 
                alt="command"
              />
            </ImageContainer>
            <div>
              <p><strong>Устинов Андрей Александрович</strong></p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ad suscipit, nisi corrupti quas impedit incidunt reiciendis cumque assumenda molestias, quaerat doloremque. Atque dignissimos libero ullam quae voluptatum, mollitia molestias.
              Soluta quod eligendi veritatis cum dolorum. Ea, hic animi quasi explicabo repellendus recusandae possimus! Enim id sequi, architecto cumque quia facere vitae ex, quasi molestiae praesentium perferendis in modi ducimus?
              Ratione, earum laudantium odio sint nostrum iusto obcaecati nisi perspiciatis a tempora modi, eaque quis, fugit nam adipisci blanditiis saepe rerum assumenda et consectetur totam quasi. Officia totam ratione corrupti!</p>
              <hr className="smallLine" />
              Вы можете связаться со мной - <a href="mailto:mail@mail.ru">mail@mail.ru</a> | <a href="tel:89228960175">8(922)896-01-75</a>
            </div>
          </ContentItem>

          <ContentItem>
            <ImageContainer>
              <Image 
                  layout="fill" 
                  src="/images/command/command_2.jpg" 
                  alt="command"
                />
            </ImageContainer>
            <div>
              <p><strong>Нестеров Максим Петрович</strong></p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ad suscipit, nisi corrupti quas impedit incidunt reiciendis cumque assumenda molestias, quaerat doloremque. Atque dignissimos libero ullam quae voluptatum, mollitia molestias.
                Soluta quod eligendi veritatis cum dolorum. Ea, hic animi quasi explicabo repellendus recusandae possimus! Enim id sequi, architecto cumque quia facere vitae ex, quasi molestiae praesentium perferendis in modi ducimus?
                Ratione, earum laudantium odio sint nostrum iusto obcaecati nisi perspiciatis a tempora modi, eaque quis, fugit nam adipisci blanditiis saepe rerum assumenda et consectetur totam quasi. Officia totam ratione corrupti!</p>
                <hr className="smallLine" />
                Вы можете связаться со мной - <a href="mailto:mail@mail.ru">mail@mail.ru</a> | <a href="tel:89228960175">8(922)896-01-75</a>
            </div>
          </ContentItem>

        </div>
      </div>
    </Page>
  )
}

const ContentItem = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 20px;
`

const ImageContainer = styled.div`
  position: relative;
  display: block;
  width: 150px;
  min-width: 150px;
  height: 150px;
  border: solid 1px rgba(100, 100, 100, .2);
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(200, 200, 200, .5);
  overflow: hidden;
`

export default We
