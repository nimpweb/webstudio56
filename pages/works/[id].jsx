import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import db from '../../db.json'
import Page from '../../components/Page';

const WorksDetail = (props) => {
  const router = useRouter();
  const workId = router.query.id ? parseInt(router.query.id) : null
  const getSiteInfo = useCallback(id => db.sites.filter(d => d.id === workId)[0]);
  const siteInfo = getSiteInfo(workId);

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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, nesciunt obcaecati. Facilis temporibus asperiores repudiandae praesentium ipsa sapiente aliquam exercitationem itaque, cumque tempore qui soluta inventore molestias accusantium aperiam nisi.
          Tempora id excepturi odit consequatur velit eius, tempore repellendus eos possimus nulla modi itaque. Beatae sequi totam quidem magnam repellendus sit voluptatum vitae numquam voluptatibus impedit dolorum, eum aspernatur cum.
          Expedita nulla, iusto commodi voluptates dolorem similique voluptatum maiores ratione praesentium quibusdam distinctio alias eaque ea explicabo porro veritatis blanditiis iure labore architecto doloribus. Hic natus totam et voluptas saepe!</p>
            <pre>{ JSON.stringify(siteInfo, null, 2) }</pre>
          </div>
          <div className="d-flex">
            {/* <Image layout="fixed" width={300} height={300} objectFit="cover" src={siteInfo?.image} /> */}

          </div>
      </Page>
    </>
  )
}

export default WorksDetail