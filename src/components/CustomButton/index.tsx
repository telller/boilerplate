import clname from 'classnames'
import React from 'react'
import './index.styl'

interface CustomButtonProps {
  active?: boolean
  children?: any
  onClick: any
}

const CustomButton = ({ active, children, onClick }: CustomButtonProps) => {
  return (
    <button className={clname('CustomButton', { 'CustomButton-active': active })} onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton
