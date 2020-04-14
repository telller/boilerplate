
import { getModelsList } from 'store/models/actions'
import React, { useEffect } from 'react'
import SingleModel from './SingleModel'
import { connect } from 'react-redux'
import { Row } from 'antd'
import './index.styl'

const ModelsList = ({ dispatch, modelsList }) => {

  useEffect(() => {
    !modelsList.length && dispatch(getModelsList())
  }, [])

  return (
    <div className='ModelsList'>
      <div className='title'>CHOOSE YOUR NEW CAR</div>
      <Row gutter={32}>
        {modelsList.map(itm => <SingleModel { ...itm } key={itm.code}/>)}
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({ 
  modelsList: state.models.modelsList
})
export default connect(mapStateToProps)(ModelsList) 
