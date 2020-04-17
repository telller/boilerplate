import { getModelsList } from 'store/models/actions'
import React, { useEffect } from 'react'
import { MainLayout } from 'components'
import SingleModel from './SingleModel'
import { connect } from 'react-redux'

import { Row } from 'antd'
import './index.styl'

const ModelsList = ({ globalLoading, dispatch, modelsList }) => {
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

const mapStateToProps = state => ({
  globalLoading: state.models.globalLoading,
  modelsList: state.models.modelsList,
})
export default connect(mapStateToProps)(ModelsList)
