import { useEffect, useState } from 'react'
import './App.css'
import Container from './Container.js'
import axios from 'axios'

const SERVER_URL = process.env.SERVER_URL

const App = () => {
  const [players, setPlayers] = useState([])

  const getPlayer = async () => {
    try {
      const res = await axios.get(SERVER_URL)
      console.log(res)

      setPlayers(res.data)
    } catch(err) {
      console.log(err)

      setPlayers([])
    }
  }
  
  useEffect(() => {
    getPlayer()
  }, [])

  return (
    <div>
      <Header/>
      <Playerlist 
        title="월드클래스 선수들"
        listPlayer={players}/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>최애 축구선수들</h1>
  )
}

const Playerlist = ({title, listPlayer}) => {
  return (
    <div className='playerlist'>
      <div className="playerlist">{title}</div>
      {
        listPlayer.map(player => 
          <Container key={player.id} player={player}/>
        )
      }
    </div>
  )
}

export default App
