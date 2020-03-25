import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import './index.styl'

const Home = () => {
  const socket = io(window.location.origin)

  useEffect(() => {
    socket.on('broadcast', (data) => console.log({ data }))
  }, [])

  return <div id='home'>Home page WORKING!</div>
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Home)
