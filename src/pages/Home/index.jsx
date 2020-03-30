import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import './index.styl'
const socket = io({ path: '/ws/chat' })

const Home = () => {
  const [val, $val] = useState('')
  const [mesages, $mesages] = useState([])

  useEffect(() => {
    socket.on('connected', (data = []) => $mesages(data))
    socket.on('sendmessage', (data = []) => $mesages(data))
  }, [])

  const onSend = () => {
    socket.emit('getmessage', val)
    $val('')
  }

  return (
    <div id='home'>
      <div>
        <input onChange={(e) => $val(e.target.value)} value={val} />
        <button onClick={onSend}>Send messagessss Working</button>
      </div>
      <ul>
        {mesages.map((msg, ind) => (
          <li key={ind}>{msg}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Home)
