
import { getModelByCode } from 'store/models/actions'
import React, { useEffect } from 'react'
import SingleModel from './SingleModel'
import { connect } from 'react-redux'
import { Row } from 'antd'
import './index.styl'

const ModelsList = ({ dispatch, match, currentModel }) => {
  console.log({ currentModel })

  useEffect(() => {
    if ((currentModel || {}).code !== match.params.carCode) {
      dispatch(getModelByCode(match.params.carCode))
    }
  }, [])

  return (
    <div className='ModelsList'>
      <div className='title'>CHOOSE YOUR NEW CAR</div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentModel: state.models.currentModel,
})
export default connect(mapStateToProps)(ModelsList) 
