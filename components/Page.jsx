import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import TopHeader from './TopHeader'
import Footer from './Footer'
import s from '../styles/page.module.css'

const Page = ( { children, title, subTitle=null, breadcrumbs = null } ) => {
  return (
    <>
      <TopHeader />
      <main>
        <div className={s.pageContent}>
          <h1 className={s.pageHeader}>{title}</h1>
          { subTitle && <h4 className={`${s.pageSubHeader} text-center`}>{subTitle}</h4> }
          { breadcrumbs && <Breadcrumbs items={breadcrumbs} /> }
          <div className={s.content}>
            { children }
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page

