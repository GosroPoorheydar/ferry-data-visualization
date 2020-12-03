import { useState } from 'react'
import cyclistMask from '../img/cyclist-mask.png'
import cyclist from '../img/cyclist.png'
import pedestrianMask from '../img/pedestrian-mask.png'
import pedestrian from '../img/pedestrian.png'
import scooterMask from '../img/scooter-mask.png'
import scooter from '../img/scooter.png'

const Info = ({ setShowFerry }) => {
  const [selectedData, setSelectedData] = useState(null)
  const [selectedFerry, setSelectedFerry] = useState(null)

  const data = {
    ndsm: {
        1042: {
            pedestriansNoMask: 4,
            pedestriansMask: 9,
            cyclistsNoMask: 5,
            cyclistsMask: 37,
            scootersNoMask: 3,
            scootersMask: 1,
        },
        1114: {
            pedestriansNoMask: 3,
            pedestriansMask: 9,
            cyclistsNoMask: 3,
            cyclistsMask: 28,
            scootersNoMask: 1,
            scootersMask: 2,
        },
    },
    buiksloter: {
        1012: {
            pedestriansNoMask: 3,
            pedestriansMask: 12,
            cyclistsNoMask: 5,
            cyclistsMask: 30,
            scootersNoMask: 3,
            scootersMask: 7,
        },
        1023: {
            pedestriansNoMask: 3,
            pedestriansMask: 2,
            cyclistsNoMask: 3,
            cyclistsMask: 26,
            scootersNoMask: 1,
            scootersMask: 2,
        },
        1036: {
            pedestriansNoMask: 2,
            pedestriansMask: 7,
            cyclistsNoMask: 2,
            cyclistsMask: 25,
            scootersNoMask: 2,
            scootersMask: 5,
        },
        1041: {
            pedestriansNoMask: 2,
            pedestriansMask: 7,
            cyclistsNoMask: 2,
            cyclistsMask: 25,
            scootersNoMask: 2,
            scootersMask: 5,
        },
        1043: {
            pedestriansNoMask: 5,
            pedestriansMask: 13,
            cyclistsNoMask: 5,
            cyclistsMask: 35,
            scootersNoMask: 1,
            scootersMask: 2,
        },
        1046: {
            pedestriansNoMask: 3,
            pedestriansMask: 8,
            cyclistsNoMask: 0,
            cyclistsMask: 44,
            scootersNoMask: 4,
            scootersMask: 2,
        },
        1053: {
            pedestriansNoMask: 1,
            pedestriansMask: 9,
            cyclistsNoMask: 3,
            cyclistsMask: 25,
            scootersNoMask: 2,
            scootersMask: 5,
        },
        1057: {
            pedestriansNoMask: 3,
            pedestriansMask: 11,
            cyclistsNoMask: 7,
            cyclistsMask: 32,
            scootersNoMask: 1,
            scootersMask: 6,
        },
        1102: {
            pedestriansNoMask: 3,
            pedestriansMask: 12,
            cyclistsNoMask: 3,
            cyclistsMask: 18,
            scootersNoMask: 2,
            scootersMask: 3,
        },
        1109: {
            pedestriansNoMask: 3,
            pedestriansMask: 6,
            cyclistsNoMask: 3,
            cyclistsMask: 17,
            scootersNoMask: 1,
            scootersMask: 2,
        },
      }
  }

  const changeSelectedData = (e, ferry) => {
    const time = Number(e.target.value)
    const selectedData = ferry === 'buiksloter' ? data.buiksloter[time] : data.ndsm[time]
    setSelectedData(selectedData)
  }

  const createBuiksloterButtons = () => {
    const buiksloterButtons = Object.keys(data.buiksloter)
    const buiksloterButtonArray = []
    buiksloterButtons.forEach((buiksloterButton, index) => {
      buiksloterButtonArray.push(
        <button className="time-button" onClick={(e) => changeSelectedData(e, 'buiksloter')} value={buiksloterButton} key={index}>{buiksloterButton.replace(/(..)/g, '$1:').slice(0,-1)}</button>
      )
    })
    return buiksloterButtonArray
  }

  const createNdsmButtons = () => {
    const ndsmButtons = Object.keys(data.ndsm)
    const ndsmButtonArray = []
    ndsmButtons.forEach((ndsmButton, index) => {
      ndsmButtonArray.push(
        <button className="time-button" onClick={(e) => changeSelectedData(e, 'ndsm')} value={ndsmButton} key={index}>{ndsmButton.replace(/(..)/g, '$1:').slice(0,-1)}</button>
      )
    })
    return ndsmButtonArray
  }

  const displayTimeButtons = () => {
    if (selectedFerry === 'ndsm') {
      return (
        <div class="m-info__ndsm-buttons">
          {createNdsmButtons()}
        </div>
      )
    } else if (selectedFerry === 'buiksloter') {
      return (
        <div class="m-info__buiksloter-buttons">
          {createBuiksloterButtons()}
        </div>
      )
    }
  }

  const checkIfDataIsSelected = () => {
    if (selectedData) {
    return (
      <>
        <div className="m-info__grid m-info__grid__cyclist-mask">
          {[...Array(selectedData.cyclistsMask)].map((v, i) => (<img key={i} src={cyclistMask} alt=""/>))}
        </div>
        <div className="m-info__grid m-info__grid__cyclist">
          {[...Array(selectedData.cyclistsNoMask)].map((v, i) => (<img key={i} src={cyclist} alt=""/>))}
        </div>
        <div className="m-info__grid m-info__grid__pedestrian-mask">
          {[...Array(selectedData.pedestriansMask)].map((v, i) => (<img key={i} src={pedestrianMask} alt=""/>))}
        </div>
        <div className="m-info__grid m-info__grid__pedestrian">
          {[...Array(selectedData.pedestriansNoMask)].map((v, i) => (<img key={i} src={pedestrian} alt=""/>))}
        </div>
        <div className="m-info__grid m-info__grid__scooter-mask">
          {[...Array(selectedData.scootersMask)].map((v, i) => (<img key={i} src={scooterMask} alt=""/>))}
        </div>
        <div className="m-info__grid m-info__grid__scooter">
          {[...Array(selectedData.scootersNoMask)].map((v, i) => (<img key={i} src={scooter} alt=""/>))}
        </div>
      </>
    )
  }}

  return (
      <div className="m-info">
          <div className="m-info__column">
            {checkIfDataIsSelected()}
          </div>
          <div className="m-info__column">
            <h1>De pont op het Centraal Station  van Amsterdam</h1>
            <h2>Intro: Voor de opdracht van de data week hebben we een website gebouwd. </h2>
            <button onClick={() => setShowFerry(prevState => !prevState)} className="go-ferry">LAAT HEM VAREN</button>
            <button onClick={() => setSelectedFerry('ndsm')}>NDSM</button>
            <button onClick={() => setSelectedFerry('buiksloter')}>Buiksloterweg</button>
            {displayTimeButtons()}
          </div>
      </div>
  )
}

export default Info