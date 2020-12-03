const Ferry = ({ showFerry }) => {
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

    const dataNumber = {
        pedestrians: 30,
        cyclists: 10
    }

    const createPedestrians = () => {
        const allPedestrians = []
        for (let i = 0; i < dataNumber.pedestrians; i++) {
            allPedestrians.push(
                <g>
                    <path class="st0" d="M21.95,54.74c-0.05,0.22,0.12,0.43,0.35,0.43h3.36c0.33,0,0.62-0.23,0.69-0.56l2.99-13.99l0.03-0.27h0.02
                        l0.01-0.04l3.05,14.47c0.05,0.23,0.25,0.39,0.48,0.39h3.62c0.18,0,0.32-0.17,0.29-0.35l-2.55-13.69c-0.14-0.67-0.42-2.36-0.38-3.04
                        l0.68-14.76c0.01-0.13,0.2-0.14,0.22-0.01l2.65,10.33c0.12,0.69,0.44,1.78,1.14,1.78h0.63c1.58-0.01,1.15-1,0.76-2.54L35.93,15.9
                        c-0.1-0.38-1.26-0.89-1.65-0.89h-4.82h-0.13h-5.58c-0.47,0-0.77,0.81-0.89,1.27l-4.06,16.61c-0.38,1.48-0.13,2.97,1.4,2.98h0
                        c0.95,0.01,1.11-0.9,1.27-1.84l2.48-10.7c0.02-0.13,0.21-0.12,0.22,0.01l0.28,15.45L21.95,54.74z"/>
                    <ellipse class="st0" cx="29.46" cy="11.89" rx="4.12" ry="4.82"/>
                </g>
            )
        }
        return allPedestrians
    }

    const createCyclists = () => {
        const allPedestrians = []
        for (let i = 0; i < dataNumber.pedestrians; i++) {
            allPedestrians.push(
                <g>
                    <path class="st0" d="M21.95,54.74c-0.05,0.22,0.12,0.43,0.35,0.43h3.36c0.33,0,0.62-0.23,0.69-0.56l2.99-13.99l0.03-0.27h0.02
                        l0.01-0.04l3.05,14.47c0.05,0.23,0.25,0.39,0.48,0.39h3.62c0.18,0,0.32-0.17,0.29-0.35l-2.55-13.69c-0.14-0.67-0.42-2.36-0.38-3.04
                        l0.68-14.76c0.01-0.13,0.2-0.14,0.22-0.01l2.65,10.33c0.12,0.69,0.44,1.78,1.14,1.78h0.63c1.58-0.01,1.15-1,0.76-2.54L35.93,15.9
                        c-0.1-0.38-1.26-0.89-1.65-0.89h-4.82h-0.13h-5.58c-0.47,0-0.77,0.81-0.89,1.27l-4.06,16.61c-0.38,1.48-0.13,2.97,1.4,2.98h0
                        c0.95,0.01,1.11-0.9,1.27-1.84l2.48-10.7c0.02-0.13,0.21-0.12,0.22,0.01l0.28,15.45L21.95,54.74z"/>
                    <ellipse class="st0" cx="29.46" cy="11.89" rx="4.12" ry="4.82"/>
                </g>
            )
        }
        return allPedestrians
    }

    return (
        <div className="m-ferry">
            <svg className={showFerry ? "m-ferry__boat m-ferry__boat--active" : "m-ferry__boat"} viewBox="-450 -450 1500 1500">
                <g>
                    <path className="st0" d="M283.12,45.36H99.28c0,0-69.75,459.71,0,672.13h175.87h15.94h175.87c69.75-212.42,0-672.13,0-672.13H283.12z"/>
                    <path className="st1" d="M283.12,45.36H114c0,0-64.16,459.71,0,672.13h161.78h14.66h161.78c64.16-212.42,0-672.13,0-672.13H283.12z"/>
                    <polygon className="st2" points="444.02,704.72 122.22,704.72 122.22,58.38 213.14,58.38 444.02,58.38 "/>
                    <rect className={showFerry ? "m-ferry__loader m-ferry__loader--active st4" : "m-ferry__loader st4"} x="132.57" y="717.48" width="311.45" height="100"/>
                    <path className="st8" d="M193.9,142.1c0,0,7.53-67,19.23-83.72"/>
                    <path className="st8" d="M375.68,142.1c0,0-7.53-67-19.23-83.72"/>
                    <path className="st8" d="M192.23,620.74c0,0,7.53,67,19.23,83.72"/>
                    <path className="st8" d="M374.01,620.74c0,0-7.53,67-19.23,83.72"/>
                    <g>
                        <rect x="132.57" y="34.29" className="st4" width="311.45" height="11.07"/>
                        <rect x="132.57" y="30.37" className="st6" width="311.45" height="7.84"/>
                    </g>
                </g>
                <g className="m-ferry__data">
                    {createPedestrians()}
                </g>
                <g>
                    <path className="st3" d="M396.69,142.1c0,0-33.22,0-78.08,0c-21.75,0-46.21,0-70.98,0c-44.86,0-78.08,0-78.08,0l-47.32,33.29v407.4
                    l33.13,37.96h107.66h40.22h107.66l33.13-37.96v-407.4L396.69,142.1z"/>
                    <path className="st0" d="M396.69,199.66c0,0-33.22,0-78.08,0c-21.75,0-46.21,0-70.98,0c-44.86,0-78.08,0-78.08,0l-47.32,26.45v323.66
                    l33.13,30.16h107.66h40.22h107.66l33.13-30.16V226.11L396.69,199.66z"/>
                    <rect x="142.5" y="541.57" className="st1" width="44.39" height="9.51"/>
                    <circle className={showFerry ? "m-ferry__light m-ferry__light--active st5" : "m-ferry__light st5"} cx="164.69" cy="546.33" r="9.43"/>
                    <g>
                        <line className="st7" x1="402.94" y1="488.23" x2="421.11" y2="479.14"/>
                        <line className="st7" x1="402.94" y1="488.23" x2="384.77" y2="479.14"/>
                        <line className="st7" x1="403.38" y1="505.85" x2="402.51" y2="485.55"/>
                        <circle className="st2" cx="384.77" cy="479.14" r="9.09"/>
                        <circle className="st2" cx="421.11" cy="479.14" r="9.09"/>
                        <circle className="st2" cx="402.94" cy="506.9" r="9.09"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Ferry