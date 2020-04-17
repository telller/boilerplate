import clname from 'classnames'
import React from 'react'
import './index.styl'

interface CustomButtonProps {
  onClick?: () => any
  active?: boolean
  children?: any
}

const CustomButton = ({ active, children, onClick }: CustomButtonProps) => (
  <button className={clname('CustomButton', { 'CustomButton-active': active })} onClick={onClick}>
    {children}
  </button>
)

export default CustomButton
