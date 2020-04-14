import { getModelByCode, setSelectedModel } from 'store/models/actions'
import { MainLayout, CustomButton } from 'components'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { sortBy, map } from 'lodash'
import { toCurency } from 'helpers'
import { minBy } from 'lodash'
import './index.styl'

const ModelConfigurator = ({ dispatch, match, currentModel, globalLoading, selectedModel }) => {


  console.log({ currentModel, selectedModel })

  useEffect(() => {
    if ((currentModel || {}).code !== match.params.carCode) {
      dispatch(getModelByCode(match.params.carCode))
    }
  }, [])

  const handleSelectTrim = itm => {
    const minColor = minBy(itm.colors, 'price')
    const newSelModel = {
      imageUrl: minColor.imageUrl,
      priceColor: minColor.price,
      color: minColor.name,
      priceTrip: itm.price,
      trip: itm.name,
    }
    dispatch(setSelectedModel(newSelModel))
  }

  const handleSelectColor = itm => {
    const minColor = minBy(itm.colors, 'price')
    const newSelModel = {
      imageUrl: minColor.imageUrl,
      priceColor: minColor.price,
      color: minColor.name,
      priceTrip: itm.price,
      trip: itm.name,
    }
    dispatch(setSelectedModel(newSelModel))
  }

  const header = (
    <div className='header'>
      {currentModel.name}
      <span className='type'>{` ${selectedModel.trip}`}</span>
      <div className='color'>{selectedModel.color}</div>
    </div>
  )
  const sider = (
    <div className='sider'>
      <div className='title'>CHOOSE EQUIPMENT LEVEL</div>
      {map(sortBy(currentModel.trims, 'price'), itm => (
        <CustomButton key={itm.name} active={itm.name === selectedModel.trip} onClick={() => handleSelectTrim(itm)}>
          {itm.name}
          <div className='price'>{toCurency(itm.price)}</div>
        </CustomButton>
      ))}
    </div>
  )
  return (
    <MainLayout className='ModelConfigurator' spinnning={globalLoading} header={header} sider={sider}>
      <img className='carPreview' src={selectedModel.imageUrl} alt={selectedModel.trip} />
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  currentModel: state.models.currentModel.asMutable({ deep:true }),
  selectedModel: state.models.selectedModel,
  globalLoading: state.models.globalLoading,
})
export default connect(mapStateToProps)(ModelConfigurator)
