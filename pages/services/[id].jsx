import React, { useEffect }  from 'react'
import { useRouter } from 'next/router'

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
      <pre>{ JSON.stringify( router, null, 2) }</pre>
    </>
  )
}

export default ServicesDetail