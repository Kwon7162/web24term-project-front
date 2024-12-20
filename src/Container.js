import { useState } from "react"
import { FaStar } from "react-icons/fa"

const Container = (props) => {
    const [desExpanded, setDesExpanded] = useState(false)

    const toggleDes = () => {
        setDesExpanded(prevState => !prevState)
    }

    return (
      <>
        <div className="container">
          <img 
              src={`${props.player.url}`}
              alt={`${props.player.name} 이미지`}
              onClick={toggleDes}/>
          <a 
          href={`https://www.youtube.com/results?search_query=${props.player.name}+special`}
          target="_blank"
          rel="noreferrer">
            <div className="player-name">
              {`${props.player.name}`}
            </div>
            <div className="player-extra">
              {`No.${props.player.num}, Position: ${props.player.position}`}
            </div>
          </a>
        </div>
        {props.player.des && desExpanded &&(
            <pre className='player-des' onClick={toggleDes}>
            {props.player.des}
          </pre>
        )}
      </>
    )
  }

  export default Container