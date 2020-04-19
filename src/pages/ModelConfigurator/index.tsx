import { getModelByCode, setSelectedModel, leadModel } from 'store/models/actions'
import { SiderEquipment, SiderColor, NavigationBar } from './components'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { MainLayout } from 'components'
import { toCurency } from 'helpers'
import RootState from 'store/types'
import './index.styl'

export default () => {
  const { currentModel, selectedModel, globalLoading } = useSelector((state: RootState ) => state.models)
  const { location, push } = useHistory()
  const { carCode } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if ((currentModel || {}).code !== carCode) {
      dispatch(getModelByCode(carCode))
    }
  }, [])

  const handleProceed = async () => {
    const leadData = {
      colorName: selectedModel?.selectedColor?.name,
      modelName: currentModel?.name,
      trimName: selectedModel?.name,
    }
    const isOk = await dispatch(leadModel(leadData))
    push(`/models/${carCode}/${isOk ? 'success' : 'failure'}`)
  }

  const siderProps = { currentModel, selectedModel, setSelModel: selModel => dispatch(setSelectedModel(selModel)) }
  return (
    <MainLayout className='ModelConfigurator' spinnning={globalLoading}>
      <div className='contentWrapper'>
        <div className='content'>
          <img
            className='carPreview'
            src={selectedModel?.selectedColor?.imageUrl}
            alt={selectedModel?.name}
            title={selectedModel?.name}
          />
          <div className='carInfo'>
            {currentModel?.name}
            <span className='type'>{` ${selectedModel?.name}`}</span>
            <div className='color'>{selectedModel?.selectedColor.name}</div>
          </div>
          <div className='carPrice'>{toCurency(Number(selectedModel?.selectedColor?.price || 0) + Number(selectedModel?.price || 0))}</div>
        </div>
        <div className='sidebar'>
          {location.pathname.includes('trim') ? <SiderEquipment {...siderProps} /> : <SiderColor {...siderProps} />}
          <NavigationBar handleProceed={handleProceed} />
        </div>
      </div>
    </MainLayout>
  )
}
