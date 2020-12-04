import { useState } from 'react'
import cyclistMask from '../img/cyclist-mask.png'
import cyclist from '../img/cyclist.png'
import pedestrianMask from '../img/pedestrian-mask.png'
import pedestrian from '../img/pedestrian.png'
import scooterMask from '../img/scooter-mask.png'
import scooter from '../img/scooter.png'
import cyclistIcon from '../img/cyclist-icon.png'
import pedestrianIcon from '../img/pedestrian-icon.png'
import scooterIcon from '../img/scooter-icon.png'

const Sidebar = ({ selectedFerry, setSelectedFerry, setSelectedTime }) => {
  const [selectedData, setSelectedData] = useState(null)

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
    setSelectedTime(e.target.value.replace(/(..)/g, '$1:').slice(0,-1))
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
        <div className="m-sidebar__ndsm-buttons">
          {createNdsmButtons()}
        </div>
      )
    } else if (selectedFerry === 'buiksloter') {
      return (
        <div className="m-sidebar__buiksloter-buttons">
          {createBuiksloterButtons()}
        </div>
      )
    }
  }

  const checkIfDataIsSelected = () => {
    if (selectedData) {
    return (
      <>
        <div className="m-sidebar__grid m-sidebar__grid__cyclist-mask">
          {[...Array(selectedData.cyclistsMask)].map((v, i) => (<img key={i} src={cyclistMask} alt=""/>))}
        </div>
        <div className="m-sidebar__grid m-sidebar__grid__cyclist">
          {[...Array(selectedData.cyclistsNoMask)].map((v, i) => (<img key={i} src={cyclist} alt=""/>))}
        </div>
        <div className="m-sidebar__grid m-sidebar__grid__pedestrian-mask">
          {[...Array(selectedData.pedestriansMask)].map((v, i) => (<img key={i} src={pedestrianMask} alt=""/>))}
        </div>
        <div className="m-sidebar__grid m-sidebar__grid__pedestrian">
          {[...Array(selectedData.pedestriansNoMask)].map((v, i) => (<img key={i} src={pedestrian} alt=""/>))}
        </div>
        <div className="m-sidebar__grid m-sidebar__grid__scooter-mask">
          {[...Array(selectedData.scootersMask)].map((v, i) => (<img key={i} src={scooterMask} alt=""/>))}
        </div>
        <div className="m-sidebar__grid m-sidebar__grid__scooter">
          {[...Array(selectedData.scootersNoMask)].map((v, i) => (<img key={i} src={scooter} alt=""/>))}
        </div>
      </>
    )
  }}

  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)

  const displaySelectedDataInfo = () => {
    if (selectedData) {
    return (
      <>
        <div className="m-sidebar__comparison">
          <div>
            <img src={cyclistIcon} alt=""/>
            <img src={pedestrianIcon} alt=""/>
            <img src={scooterIcon} alt=""/>
          </div>
          <div>
            <h2>With mask:</h2>
            <h3>{selectedData.cyclistsMask}</h3>
            <h3>{selectedData.pedestriansMask}</h3>
            <h3>{selectedData.scootersMask}</h3>
          </div>
          <div>
            <h2>Without mask:</h2>
            <h3>{selectedData.cyclistsNoMask}</h3>
            <h3>{selectedData.pedestriansNoMask}</h3>
            <h3>{selectedData.scootersNoMask}</h3>
          </div>
        </div>
        <h3>Total amount of passengers: {sumValues(selectedData)}</h3>
      </>
    )
  }}

  return (
      <div className="m-sidebar">
          <div className="m-sidebar__column">
            {checkIfDataIsSelected()}
          </div>
          <div className="m-sidebar__column">
            <h1>Ferry information</h1>
            <h3>Select a ferry and a time to get more information</h3>
            <button onClick={() => setSelectedFerry('ndsm')} className={selectedFerry === 'ndsm' ? 'active-button' : ''}>NDSM</button>
            <button onClick={() => setSelectedFerry('buiksloter')} className={selectedFerry === 'buiksloter' ? 'active-button' : ''}>Buiksloterweg</button>
            {displayTimeButtons()}
            {displaySelectedDataInfo()}
          </div>
      </div>
  )
}

export default Sidebar