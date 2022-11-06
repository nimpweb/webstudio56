import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export const WorkItem = ( { link, imageSource, title, text, cms } ) => {
  const router = useRouter();
  return (
    <WorksItem>
      <Link className="imageLink" href={link}>
        <ImageContainer>
          <Image 
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            src={imageSource}
            alt={title}
          />
        </ImageContainer>
      </Link>
      <CardTitle>{title}</CardTitle>
      <Content>{text}</Content>
      <Content>CMS: <strong>{cms}</strong></Content>
      <ButtonsContainer>
        <ButtonLeft onClick={ () => router.push(link)}>Просмотр</ButtonLeft>
        <ButtonRight onClicl={ () => alert('Бери...')}>Хочу такой же</ButtonRight>
      </ButtonsContainer>
    </WorksItem>
  )
}

const WorksContainer = ( { works = [] } ) => {
  if (!works || !works.length) return;
  return (
    <AllContainer>
      { works.map( (item, index) => <WorkItem key={index} link={item.link} imageSource={item.imageSource} title={item.title} text={item.text} cms={item.cms} />) }
    </AllContainer>
  )
}

export default WorksContainer

const AllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  flex-wrap: wrap;
  width: 1200px;
`

const ImageContainer = styled.div`
position: relative;
width: 300px;
height: 200px;
margin-bottom: 20px;
cursor: pointer;
`
const CardTitle = styled.h5`
  color: lightslategray;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 5px 5px rgb(200, 200, 200);
  text-align: center;
`
const WorksItem = styled.div`
  width: 300px;
  margin-top: 20px;
`

const Content = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const ButtonLeft = styled.div`
  color: var(--default-color);
  border: solid 1px var(--default-color);
  border-radius: 15px;
  text-decoration: none;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  font-size: 12px;
  padding: 5px 10px;
  transition: .5s ease;
  -webkit-transition: .5s ease;
  -moz-transition: .5s ease;
  -ms-transition: .5s ease;
  -o-transition: .5s ease;
  cursor: pointer;
  &:hover{
    background-color: var(--hover-color);
    color: white;
    border-color:  var(--hover-color);
  }
`

const ButtonRight = styled.div`
  color: var(--default-color);
  border: solid 1px var(--default-color);
  border-radius: 15px;
  text-decoration: none;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  font-size: 12px;
  padding: 5px 10px;
  transition: .5s ease;
  -webkit-transition: .5s ease;
  -moz-transition: .5s ease;
  -ms-transition: .5s ease;
  -o-transition: .5s ease;
  cursor: pointer;
  background-color: var(--hover-color);
  color: white;
  border-color: var(--hover-color);
  &:hover {
    background-color: white;
    color: var(--hover-color);
  }
`