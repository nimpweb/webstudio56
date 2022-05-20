import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Breadcrumbs from './Breadcrumbs'
import TopHeader from './TopHeader'
import Footer from './Footer'
import s from '../styles/page.module.css'

const Page = ( { children, pageTitle=null, pageDescription=null, title, subTitle=null, breadcrumbs = null } ) => {
  const router= useRouter();
  console.log('ROUTER', router);
  return (
    <>
      <Head>
        <title>{ pageTitle ? pageTitle : title }</title>
        <meta name="description" content={pageDescription ? pageDescription : title} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="stylesheet" href="./assets/css/styles.css" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        <meta property="og:title" content={ pageTitle ? pageTitle : title }/> 
        <meta property="og:url" content={`${process.env.siteUrl}/`} /> 
        <meta property="og:description" content={pageDescription ? pageDescription : title } /> 
      </Head>
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

