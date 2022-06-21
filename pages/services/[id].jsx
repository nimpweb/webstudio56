import React, { useEffect }  from 'react'
import { useRouter } from 'next/router'
import Page from '../../components/Page';

const ServicesDetail = ( ) => {
  const router = useRouter();
  const serviceId = router.query?.id || null;

  useEffect( () => {
    if (!serviceId) {
      router.push('/')
    }
  
  }, [])
  return (
    <>
      <Page
        title="Услуга" 
        pageTitle='Услуга'
        pageDescription="Услуга"
      >
        <pre>{ JSON.stringify( router, null, 2) }</pre>
      </Page>
    </>
  )
}

export default ServicesDetail