import { getModelByCode, setSelectedModel, toogleGlobalLoading } from 'store/models/actions'
import { SiderEquipment, SiderColor, NavigationBar } from './components'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { leadModel } from 'services/models.service'
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
    try {
      dispatch(toogleGlobalLoading())
      await leadModel({
        colorName: selectedModel.selectedColor.name,
        modelName: currentModel.name,
        trimName: selectedModel.name,
      })
      dispatch(toogleGlobalLoading())
      push(`/models/${carCode}/success`)
    } catch (e) {
      dispatch(toogleGlobalLoading())
      push(`/models/${carCode}/failed`)
    }
  }

  const setSelModel = selModel => dispatch(setSelectedModel(selModel))
  const siderProps = { currentModel, selectedModel, setSelModel }
  return (
    <MainLayout className='ModelConfigurator' spinnning={globalLoading}>
      <div className='contentWrapper'>
        <div className='content'>
          <img
            className='carPreview'
            src={selectedModel.selectedColor.imageUrl}
            alt={selectedModel.name}
            title={selectedModel.name}
          />
          <div className='carInfo'>
            {currentModel.name}
            <span className='type'>{` ${selectedModel.name}`}</span>
            <div className='color'>{selectedModel.selectedColor.name}</div>
          </div>
          <div className='carPrice'>{toCurency(selectedModel.selectedColor.price + selectedModel.price)}</div>
        </div>
        <div className='sidebar'>
          {location.pathname.includes('trim') ? <SiderEquipment {...siderProps} /> : <SiderColor {...siderProps} />}
          <NavigationBar handleProceed={handleProceed} />
        </div>
      </div>
    </MainLayout>
  )
}
