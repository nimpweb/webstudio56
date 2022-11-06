import React, { useEffect, useState, useCallback } from 'react'
import { parse } from 'node-html-parser'
import { useRouter } from 'next/router'
import Image from 'next/image'
import db from '../../db.json'
import Page from '../../components/Page';
import { decodeHtmlSpecialChars  } from '../../utils/common.js' 

const WorksDetail = (props) => {
  const router = useRouter();
  const workId = router.query.id ? parseInt(router.query.id) : null
  console.log('WORK_ID:', workId);
  const getSiteInfo = useCallback(id => db.sites.filter(d => d.id === workId)[0]);
  const siteInfo = getSiteInfo(workId);


  const parseContent = (text) => {
    let content = text ?? '';
    if (!content.length) return content;
    return decodeHtmlSpecialChars(content);
  }


  return (
    <>
      <Page
        pageTitle={`WebStudio56: ${siteInfo?.title}`}
        pageDescription={`Webstudio56, разработка ${siteInfo?.title}`}
        title={siteInfo?.title}
        breadcrumbs={[
          { title: 'Главная', link: '/'},
          { title: 'Работы', link: '/works'},
          { title: siteInfo?.title, link: ''},
        ]}
      >
        <div className="pageWidthContainer">
          <div style={{display: "flex", padding: 10, gap: 10, objectFit: "contain"}}>

            <div style={{position: "relative", border: "solid 1px #ccc", padding: 10, minWidth: "200px", minHeight: "500px"}}>
              <Image 
                src={siteInfo?.image} 
                alt={siteInfo?.title}
                layout="fill"                
              />
            </div>
            <div dangerouslySetInnerHTML={{__html: siteInfo?.content }} />
          </div>
          <div style={{textAlign: "center", marginTop: "20px", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
            <span>Перейти на сайт: </span><a rel="nofollow" href={siteInfo?.href}>{siteInfo?.href}</a>
          </div>
        </div>
      </Page>
    </>
  )
}

export default WorksDetail