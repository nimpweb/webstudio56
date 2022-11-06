import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Page from '../../components/Page'
import WorksContainer from '../../components/WorkContainer'
import db from '../../db.json'


const Works =() => {
  const [sites, setSites] = useState([])
  const [sitesFilterItems, setSitesFilterItems] = useState([])

  useEffect( () => {
    setSites([...db['sites']])
    setSitesFilterItems([...db['sites_filter_items']])
  }, [db])

  const FilterElements = ( data ) => {
    if (!data) return (<p>loading data...</p>)
    if (!data.data) return (<p>not data loading...</p>)
    return (
      <FilterContainer>
        { data.data.map(f => {
          return <FilterItem key={f.id}>
            <Image 
              key={f.id}
              layout="fixed"
              width={f.width}
              height={f.height}
              src={f.src}
              alt={f.title}
            />
            { f.title }
          </FilterItem>
        })
      }
      </FilterContainer>
    )
  }

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
          { <FilterElements data={sitesFilterItems} /> }
        </div>

        <div className="pageWidthContainer">
          <p>На этой странице можно ознакомиться с примерами landing page, которые были созданы нами. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, odio veritatis. Quibusdam veritatis est obcaecati, in minus perferendis fugiat quidem doloremque quos eveniet magni repellendus id dolores officia, perspiciatis dolore.
          Beatae nobis natus perspiciatis maiores sequi harum doloremque officia quasi ipsam quod accusantium provident adipisci corporis, fuga, ex reiciendis ut porro praesentium veniam perferendis aut. Sapiente ea dicta ipsa corrupti?</p>
          <br />

          { 
            sites 
              ?  <WorksContainer 
                    works={sites.map( s => {
                      return { 
                        link: `/works/${s.id}`,
                        imageSource: s.image,
                        title: s.title,
                        text: s.description,
                        cms: s.cms
                      }
                    })} 
                />
              : <p>Данные загружаются...</p>
          }
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
