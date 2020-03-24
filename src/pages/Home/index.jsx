import { connect } from 'react-redux'
import React from 'react'
import './index.styl'

const Home = () => {
  return (
    <div id='home'>
      Home page WORKING!
    </div>
  )
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Home)
