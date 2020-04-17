import { CustomButton } from 'components'
import { sortBy, map } from 'lodash'
import { toCurency } from 'helpers'
import { minBy } from 'lodash'
import React from 'react'
import './index.styl'

const SiderEquipment = ({ setSelModel, currentModel, selectedModel }) => (
  <div className='SiderEquipment'>
    <div className='title'>CHOOSE EQUIPMENT LEVEL</div>
    {map(sortBy(currentModel.trims, 'price'), itm => (
      <CustomButton
        onClick={() => setSelModel({ ...itm, selectedColor: minBy(itm.colors, 'price') })}
        active={itm.name === selectedModel.name}
        key={itm.name}>
        {itm.name}
        <div className='price'>{toCurency(itm.price)}</div>
      </CustomButton>
    ))}
  </div>
)

export default SiderEquipment
