import { useDispatch, useSelector } from 'react-redux'
import { getModelsList } from 'store/models/actions'
import React, { useEffect } from 'react'
import { MainLayout } from 'components'
import SingleModel from './SingleModel'
import RootState from 'store/types'
import { Row } from 'antd'
import './index.styl'

export default () => {
  const { modelsList, globalLoading } = useSelector((state: RootState ) => state.models)
  const dispatch = useDispatch()

  useEffect(() => {
    !modelsList.length && dispatch(getModelsList())
  }, [])

  return (
    <MainLayout className='ModelsList' spinnning={globalLoading}>
      <div className='title'>CHOOSE YOUR NEW CAR</div>
      <Row gutter={32}>
        {modelsList.map(itm => (
          <SingleModel {...itm} key={itm.code} />
        ))}
      </Row>
    </MainLayout>
  )
}
