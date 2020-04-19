import { Car } from 'store/models/types'
import { Link } from 'react-router-dom'
import { toCurency } from 'helpers'
import { Col } from 'antd'
import React from 'react'
import './index.styl'

const SingleModel = ({ code, name, imageUrl, priceFrom }: Car) => (
  <Col className='SingleModel' xs={24} md={12} lg={8} xl={6}>
    <Link to={`/models/${code}/trim`}>
      <img src={imageUrl} alt={name} title={name} />
      <div className='name'>{name}</div>
      <div className='price'>{toCurency(priceFrom)}</div>
    </Link>
  </Col>
)

export default SingleModel
