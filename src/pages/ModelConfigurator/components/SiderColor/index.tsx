import { sortBy, map } from 'lodash'
import { toCurency } from 'helpers'
import { Row, Col } from 'antd'
import clname from 'classnames'
import React from 'react'
import './index.styl'

interface SiderColorProps {
  setSelModel: Function,
  selectedModel: {}
}

const SiderColor = ({ setSelModel, selectedModel }) => (
  <div className='SiderColor'>
    <div className='title'>CHOOSE EQUIPMENT LEVEL</div>
    <Row gutter={32}>
      {map(sortBy(selectedModel.colors, 'price'), itm => (
        <Col 
          className={clname('colorItem', { 'colorItem-active': itm.name === selectedModel.selectedColor.name })}
          onClick={() => setSelModel({ selectedColor: itm })}
          key={itm.name} 
          xs={24} 
          md={12} 
          xl={8}
        >
          <img className='imageWrapper' src={itm.iconUrl} />
          {itm.name}
          <div className='price'>{`+${toCurency(itm.price)}`}</div>
        </Col>
      ))}
    </Row>
  </div>
)

export default SiderColor
