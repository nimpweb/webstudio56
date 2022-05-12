import React from 'react'
import { useRouter } from 'next/router'
import TopHeader from '../../components/TopHeader';
import Footer from '../../components/Footer';

const WorksDetail = () => {
  const router = useRouter();
  const workId = router.query.id || null
  return (
    <>
      <TopHeader />
      <main>
        вы указали: { workId }
      </main>
      <Footer />
    </>
  )
}

export default WorksDetail