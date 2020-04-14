import { Button } from 'antd'
import React from 'react'
import './index.styl'

interface CustomButtonProps {
  active?: boolean,
  children?: any,
  onClick: any,
}

const CustomButton = ({ active, children, onClick }: CustomButtonProps) => {
  return (
      <Button className={`CustomButton ${active ? '-active' : ''}`} onClick={onClick}>
        {children}
      </Button>
  )
}

export default CustomButton
