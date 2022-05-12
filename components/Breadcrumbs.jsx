import React from 'react'
import Link from 'next/link'
import s from '../styles/breadcrumbs.module.css'

const Breadcrumbs = ( { items } ) => {
  if (!items.length) return;

  return (
    <div className={s.breadcrumbs}>
      <div className="pageWidthContainer">
        <div className={s.breadcrumbsContainer}>
          { items.map( (item, index, arr) => (
            (index < arr.length-1) 
              ? <Link key={index} href={item.link}><a className={s.breadcrumb_link}>{item.title}</a></Link>
              : <div key={index} className={s.breadcrumb_text}>{item.title}</div>
          ))
          }
        </div>
      </div>
    </div>
  )
}


export default Breadcrumbs

/*
<Link href="/"><a class={s.breadcrumb_link} href="/">Главная</a></Link>
<div className={s.breadcrumb_text}>О команде</div>

 */