import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Page from '../../components/Page'
import WorksContainer from '../../components/WorkContainer'


const Works =() => {
  return (
    <>
      <Page
        title="Наши работы" 
        pageTitle="Наши работы" 
        pageDescription={`Webstudio56, разработка сайтов и личных кабинетов`}

        breadcrumbs={[
          { title: 'Главная', link: '/'},
          { title: 'Наши работы', link: ''},
        ]}
      >
        <div className="pageWidthContainer">
          <FilterContainer>
            <FilterItem>
              <Image 
                  layout="fixed"
                  width={40}
                  height={40}
                  src="/images/works/categories/landing.png"
                  alt="Landingpages"
                />
                Лэндинги
            </FilterItem>
            <FilterItem>
              <Image 
                    layout="fixed"
                    width={40}
                    height={40}
                    src="/images/works/categories/vizitka.png"
                    alt="Landingpages"
                  />
              Визитки
            </FilterItem>
            <FilterItem>
              <Image 
                layout="fixed"
                width={40}
                height={40}
                src="/images/works/categories/catalog.png"
                alt="Landingpages"
              />
              Каталог
            </FilterItem>
            <FilterItem>
              <Image 
                layout="fixed"
                width={40}
                height={40}
                src="/images/works/categories/shop.png"
                alt="Landingpages"
              />
              Интернет-магазин
            </FilterItem>
          </FilterContainer>
        </div>

        <div className="pageWidthContainer">
          <p>На этой странице можно ознакомиться с примерами landing page, которые были созданы нами. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, odio veritatis. Quibusdam veritatis est obcaecati, in minus perferendis fugiat quidem doloremque quos eveniet magni repellendus id dolores officia, perspiciatis dolore.
          Beatae nobis natus perspiciatis maiores sequi harum doloremque officia quasi ipsam quod accusantium provident adipisci corporis, fuga, ex reiciendis ut porro praesentium veniam perferendis aut. Sapiente ea dicta ipsa corrupti?</p>
          <br />

          <WorksContainer 
            works={[
              {link:'/works/1', imageSource:'site_3.png', title:'Сайт-визитка компании "Адонис"', text:'Компания занимающаяся деятельностю по реализации оргтехники в оренбурге и регионах', cms:'Joomla'},
              {link:'/works/1', imageSource:'site_2.png', title:'Сайт-визитка компании "Адонис"', text:'Компания занимающаяся деятельностю по реализации оргтехники в оренбурге и регионах', cms:'Joomla'},
              {link:'/works/1', imageSource:'site_1.png', title:'Сайт-визитка компании "Адонис"', text:'Компания занимающаяся деятельностю по реализации оргтехники в оренбурге и регионах', cms:'Joomla'},
            ]}
          />
        </div>
      </Page>
    </>
  )
}

const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: space-evenly;
  border-bottom: solid 1px rgba(200, 200, 200, .1);
`

const FilterItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border: solid 2px transparent;
  transition: .5s ease;
  padding: 20px;
  border-radius: 10px;
  border-bottom: none;
  cursor: pointer;
  &.active {
    background-color: var(--hover-color);
    color: white;
  }
`


export default Works
