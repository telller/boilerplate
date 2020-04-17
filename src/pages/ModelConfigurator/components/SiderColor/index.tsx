import { selectedModel } from 'store/models/types'
import { sortBy, map } from 'lodash'
import { toCurency } from 'helpers'
import { Row, Col } from 'antd'
import clname from 'classnames'
import React from 'react'
import './index.styl'

interface SiderColorProps {
  selectedModel: selectedModel
  setSelModel: (any) => any
}

export default ({ setSelModel, selectedModel }: SiderColorProps ) => (
  <div className='SiderColor'>
    <div className='title'>CHOOSE EQUIPMENT LEVEL</div>
    <Row gutter={32}>
      {map(sortBy(selectedModel.colors, 'price'), itm => (
        <Col
          className={clname('colorItem', { 'colorItem-active': itm.name === selectedModel.selectedColor.name })}
          onClick={() => setSelModel({ selectedColor: itm })}
          key={itm.name}
          xs={12}
          md={12}
          xl={8}>
          <img className='imageWrapper' src={itm.iconUrl} alt={itm.name} title={itm.name} />
          {itm.name}
          <div className='price'>{`+${toCurency(itm.price)}`}</div>
        </Col>
      ))}
    </Row>
  </div>
)
