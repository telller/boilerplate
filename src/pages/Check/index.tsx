import { useLocation } from 'react-router-dom'
import { MainLayout } from 'components'
import React from 'react'
import './index.styl'

export default () => {
  const { pathname } = useLocation()
  return (
    <MainLayout className='Check'>
      <div className='imgWrapper'>
        <img src={`/public/img/${pathname.includes('success') ? 'success' : 'fail'}.svg`} alt='checkIcon' />
      </div>
    </MainLayout>
  )
}
