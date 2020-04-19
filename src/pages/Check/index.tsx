import { useLocation } from 'react-router-dom'
import { MainLayout } from 'components'
import React from 'react'
import './index.styl'

export default () => {
  const { pathname } = useLocation()
  const isOk = pathname.includes('success')
  const status = isOk ? 'Success' : 'Failure'
  return (
    <MainLayout className='Check'>
      <div className='imgWrapper'>
        <img src={`/public/img/${isOk ? 'success' : 'fail'}.svg`} alt={status} title={status} />
      </div>
    </MainLayout>
  )
}
