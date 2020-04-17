import { Link, useLocation, useParams } from 'react-router-dom'
import React from 'react'
import './index.styl'

interface NavigationBarProps {
  handleProceed: (any) => any
}

export default ({ handleProceed }: NavigationBarProps) => {
  const { pathname } = useLocation()
  const { carCode } = useParams()

  const isTrim = pathname.includes('trim')
  return (
    <div className='NavigationBar'>
      <Link className='prev' to={`/models${isTrim ? '' : `/${carCode}/trim`}`}>
        <img src='/public/img/arrowLeft.svg' alt='arrowLeft' />
      </Link>
      {isTrim ? (
        <Link className='next' to={`/models/${carCode}/color`}>
          <img src='/public/img/arrowRight.svg' alt='arrowRight' />
        </Link>
      ) : (
        <div className='next' onClick={handleProceed}>
          PROCEED
        </div>
      )}
    </div>
  )
}
