const ferryButton = document.querySelector('.go-ferry')
const otherFerryButton = document.querySelector('.other-ferry')
const ferry = document.querySelector('.m-ferry__boat')
const loader = document.querySelector('.m-ferry__loader')
const light = document.querySelector('.m-ferry__light')

ferryButton.addEventListener('click', (e) => {
    if (ferry.classList.contains('show')) {
        loader.classList.toggle('down')
        setTimeout(() => {
            ferry.classList.toggle('show')
            light.classList.toggle('light')
        }, 1000)
    } else {
        ferry.classList.toggle('show')
        setTimeout(() => {
            loader.classList.toggle('down')
            light.classList.toggle('light')
        }, 4000)
    }
})




// import { select } from 'd3'
// import bicyclePink from '../images/bicycle-pink.svg'
// import bicycleBlack from '../images/bicycle-black.svg'
// import pedestrianPink from '../images/user-pink.svg'
// import pedestrianBlack from '../images/user-black.svg'

// const data = {
//     time1: {
//         cyclists: 5,
//         pedestrians: 10,
//     },
//     time2: {
//         cyclists: 10,
//         pedestrians: 15,
//     }
// }

// const dataNew = [
//     {
//         type: 'cyclist',
//         age: 20
//     },
//     {
//         type: 'pedestrian',
//         age: 25
//     },
//     {
//         type: 'cyclist',
//         age: 30
//     },
//     {
//         type: 'pedestrian',
//         age: 35
//     },
//     {
//         type: 'pedestrian',
//         age: 40
//     },
//     {
//         type: 'pedestrian',
//         age: 45
//     }
// ]
// const svg = select('body').append('svg').attr('width', '100%').attr('height', '100%')

// svg.selectAll('image')
//     .data(dataNew)
//     .enter()
//     .append('svg:image')
//     .attr('xlink:href', (d) => { if (d.type === 'pedestrian' && d.age < 30) {
//         return pedestrianPink 
//     } else if (d.type === 'pedestrian' && d.age >= 30) {
//         return pedestrianBlack
//     } else if (d.type === 'cyclist' && d.age < 30) {
//         return bicyclePink
//     } else if (d.type === 'cyclist' && d.age >= 30) {
//         return bicycleBlack
//     }})
//     .attr('x', (d, i) => { return 60 * i })
//     .attr('y', '100')
//     .attr('width', '50')
//     .attr('height', '50')
//     // .attr('fill', (d) => { return d.age < 30 ? hotpink : green })

// // const allTimes = Object.keys(data)

// // select('body')
// //     .selectAll('input')
// //     .data(allTimes)
// //     .enter()
// //     .append('input')
// //     .attr('type','button')
// //     .attr('class','button')
// //     .attr('value', (d) => { return d })
// //     .on('click', (d, i) => renderData(data[i]))

// // const svg = select('body').append('svg').attr('width', '100%').attr('height', '100%')

// // const renderData = (ferryData) => {
// //     svg.selectAll('*').remove()
    
// //     for (let i = 0; i <= ferryData.cyclists; i++) {
// //         svg.append('svg:image')
// //             .attr('xlink:href', bicycle)
// //             .attr('x', i * 60)
// //             .attr('y', '100')
// //             .attr('width', '50')
// //             .attr('height', '50')
    
// //         // svg.append('rect')
// //         //     .attr('x', i * 100)
// //         //     .attr('y', '50')
// //         //     .attr('width', '50')
// //         //     .attr('height', '50')
// //         //     .attr('fill', 'hotpink')
// //     }
    
// //     for (let i = 0; i <= ferryData.pedestrians; i++) {
// //         svg.append('svg:image')
// //             .attr('xlink:href', pedestrian)
// //             .attr('x', i * 60)
// //             .attr('y', '50')
// //             .attr('width', '50')
// //             .attr('height', '50')
// //     }
// // }