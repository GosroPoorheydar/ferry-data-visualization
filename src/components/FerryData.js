const FerryData = () => {
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

  return (
    <>
      <g className="cyclist-mask">
        {[...Array(data.buiksloter[1046].cyclistsMask)].map(
          (value, index) => (
            <g><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M8.45,54.63H4.16c-.18,0-.32.23-.32.5V56c0,.28.14.5.32.5H8.45c.17,0,.31-.22.31-.5v-.87C8.76,54.86,8.62,54.63,8.45,54.63Z"/><circle class="cls-1" cx="14.32" cy="4.07" r="4.07"/><path class="cls-1" d="M22.15,44.67a2,2,0,0,0,2.12-1.94s0-8.32-.32-9c-.2-.53-4.3-7.21-4.3-7.21H16v2.15S19.84,34.44,20,35c.14.35.13,7.77.13,7.77S20.32,44.67,22.15,44.67Z"/><path class="cls-1" d="M4.21,52a2,2,0,0,0,1.9,1.9A2.1,2.1,0,0,0,8.3,51.73V37.9l4.42-9.26V26.49H9.19s-4.83,9.62-5,10.27-.06,10.14,0,14.75a1.49,1.49,0,0,0,0,.21A1.94,1.94,0,0,0,4.21,52Z"/><path class="cls-1" d="M28.55,24.38c0-.07-6.54-12.11-7.6-14.3-.51-1-1.32-1-3.57-1H11.29c-2.25,0-3.06,0-3.57,1C6.66,12.27.15,24.31.12,24.38a1.52,1.52,0,0,0,.67,1.9,1.93,1.93,0,0,0,.9.21,1.72,1.72,0,0,0,1.4-.83L9.32,13.92v9.81h10V13.92l6.23,11.74a1.72,1.72,0,0,0,1.4.83,1.93,1.93,0,0,0,.9-.21A1.52,1.52,0,0,0,28.55,24.38Z"/><path class="cls-1" d="M14.47,33.71h-.19a1,1,0,0,0-1,.91V63.09a1,1,0,0,0,1,.91h.19a1,1,0,0,0,1-.91V34.62A1,1,0,0,0,14.47,33.71Z"/><path class="cls-1" d="M14.38,24.22H4.65s-.53,1-.76,1.42l9.64,0v5.56a3.85,3.85,0,0,0-3,3.78V49.64h1.75v-15a1.9,1.9,0,0,1,1.5-1.82h1.14a1.9,1.9,0,0,1,1.51,1.82v15h1.68V35a3.85,3.85,0,0,0-2.89-3.76V25.68l9.65,0c-.24-.39-.77-1.42-.77-1.42Z"/><path class="cls-1" d="M24.36,45.38H20.07c-.17,0-.31.23-.31.51v.86c0,.28.14.51.31.51h4.29c.17,0,.31-.23.31-.51v-.86C24.67,45.61,24.53,45.38,24.36,45.38Z"/><polyline class="cls-2" points="10.33 3.54 12.37 4.94 16.44 5.02 18.32 3.5 17.55 4.91 16.48 6.77 12.54 6.77 10.33 3.54"/></g></g>
          )
        )}
      </g>
      <g className="cyclist-no-mask">
        {[...Array(data.buiksloter[1012].cyclistsNoMask)].map(
          (value, index) => (
            <g><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M8.45,54.63H4.16c-.18,0-.32.23-.32.5V56c0,.28.14.5.32.5H8.45c.17,0,.31-.22.31-.5v-.87C8.76,54.86,8.62,54.63,8.45,54.63Z"/><circle class="cls-1" cx="14.32" cy="4.07" r="4.07"/><path class="cls-1" d="M22.15,44.67a2,2,0,0,0,2.12-1.94s0-8.32-.32-9c-.2-.53-4.3-7.21-4.3-7.21H16v2.15S19.84,34.44,20,35c.14.35.13,7.77.13,7.77S20.32,44.67,22.15,44.67Z"/><path class="cls-1" d="M4.21,52a2,2,0,0,0,1.9,1.9A2.1,2.1,0,0,0,8.3,51.73V37.9l4.42-9.26V26.49H9.19s-4.83,9.62-5,10.27-.06,10.14,0,14.75a1.49,1.49,0,0,0,0,.21A1.94,1.94,0,0,0,4.21,52Z"/><path class="cls-1" d="M28.55,24.38c0-.07-6.54-12.11-7.6-14.3-.51-1-1.32-1-3.57-1H11.29c-2.25,0-3.06,0-3.57,1C6.66,12.27.15,24.31.12,24.38a1.52,1.52,0,0,0,.67,1.9,1.93,1.93,0,0,0,.9.21,1.72,1.72,0,0,0,1.4-.83L9.32,13.92v9.81h10V13.92l6.23,11.74a1.72,1.72,0,0,0,1.4.83,1.93,1.93,0,0,0,.9-.21A1.52,1.52,0,0,0,28.55,24.38Z"/><path class="cls-1" d="M14.47,33.71h-.19a1,1,0,0,0-1,.91V63.09a1,1,0,0,0,1,.91h.19a1,1,0,0,0,1-.91V34.62A1,1,0,0,0,14.47,33.71Z"/><path class="cls-1" d="M14.38,24.22H4.65s-.53,1-.76,1.42l9.64,0v5.56a3.85,3.85,0,0,0-3,3.78V49.64h1.75v-15a1.9,1.9,0,0,1,1.5-1.82h1.14a1.9,1.9,0,0,1,1.51,1.82v15h1.68V35a3.85,3.85,0,0,0-2.89-3.76V25.68l9.65,0c-.24-.39-.77-1.42-.77-1.42Z"/><path class="cls-1" d="M24.36,45.38H20.07c-.17,0-.31.23-.31.51v.86c0,.28.14.51.31.51h4.29c.17,0,.31-.23.31-.51v-.86C24.67,45.61,24.53,45.38,24.36,45.38Z"/></g></g></g>
          )
        )}
      </g>
    </>
  )
}

export default FerryData