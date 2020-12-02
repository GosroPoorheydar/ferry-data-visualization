const ferryButton = document.querySelector('.go-ferry')
const ferry = document.querySelector('.m-ferry__boat')
const loader = document.querySelector('.m-ferry__loader')
const light = document.querySelector('.m-ferry__light')

ferryButton.addEventListener('click', () => {
    ferry.classList.toggle('m-ferry__boat--active')
    loader.classList.toggle('m-ferry__loader--active')
    light.classList.toggle('m-ferry__light--active')
})

const overlay = document.querySelector('.m-overlay')
const overlayButton = document.querySelector('.m-overlay__button')

overlayButton.addEventListener('click', () => {
    overlay.classList.add('m-overlay--hide')
})

import { select } from 'd3'
import bicyclePink from '../images/bicycle-pink.svg'
import bicycleBlack from '../images/bicycle-black.svg'
import pedestrianPink from '../images/user-pink.svg'
import pedestrianBlack from '../images/user-black.svg'

const dataNew = [
    {
        type: 'cyclist',
        age: 20
    },
    {
        type: 'pedestrian',
        age: 25
    },
    {
        type: 'cyclist',
        age: 30
    },
    {
        type: 'pedestrian',
        age: 35
    },
    {
        type: 'pedestrian',
        age: 40
    },
    {
        type: 'pedestrian',
        age: 45
    }
]
const svg = select('.m-ferry__data')

svg.selectAll('image')
    .data(dataNew)
    .enter()
    .append('svg:image')
    .attr('xlink:href', (d) => { if (d.type === 'pedestrian' && d.age < 30) {
        return pedestrianPink 
    } else if (d.type === 'pedestrian' && d.age >= 30) {
        return pedestrianBlack
    } else if (d.type === 'cyclist' && d.age < 30) {
        return bicyclePink
    } else if (d.type === 'cyclist' && d.age >= 30) {
        return bicycleBlack
    }})
    .attr('x', '250')
    .attr('y', '550')
    .attr('width', '50')
    .attr('height', '50')