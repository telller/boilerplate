import { getModelByCode, setSelectedModel } from 'store/models/actions'
import { SiderEquipment, SiderColor } from './components'
import React, { useEffect } from 'react'
import { MainLayout } from 'components'
import { connect } from 'react-redux'
import './index.styl'

const ModelConfigurator = ({ dispatch, match, currentModel, globalLoading, selectedModel, location }) => {

  console.log({ currentModel, selectedModel })

  useEffect(() => {
    if ((currentModel || {}).code !== match.params.carCode) {
      dispatch(getModelByCode(match.params.carCode))
    }
  }, [])

  const setSelModel = selModel => dispatch(setSelectedModel(selModel))
  const siderProps = { currentModel, selectedModel, setSelModel }
  const SideBar = location.pathname.includes('trim') ? <SiderEquipment { ...siderProps } /> : <SiderColor { ...siderProps } />
  return (
    <MainLayout className='ModelConfigurator' spinnning={globalLoading}>
      <div className='contentWrapper'>
        <div className='content'>
          <div className='header'>
            {currentModel.name}
            <span className='type'>{` ${selectedModel.name}`}</span>
            <div className='color'>{selectedModel.selectedColor.name}</div>
          </div>
          <img className='carPreview' src={selectedModel.selectedColor.imageUrl} alt={selectedModel.name} />
        </div>
        <div className='sidebar'>
          {SideBar}
        </div>
      </div>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  currentModel: state.models.currentModel.asMutable({ deep: true }),
  selectedModel: state.models.selectedModel,
  globalLoading: state.models.globalLoading,
})
export default connect(mapStateToProps)(ModelConfigurator)
