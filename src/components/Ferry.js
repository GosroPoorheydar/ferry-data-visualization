const Ferry = ({ selectedFerry }) => {
    return (
        <div className="m-ferry">
            <svg className={selectedFerry ? "m-ferry__boat m-ferry__boat--active" : "m-ferry__boat"} viewBox="-450 -450 1500 1500">
                <g>
                    <path className="st0" d="M283.12,45.36H99.28c0,0-69.75,459.71,0,672.13h175.87h15.94h175.87c69.75-212.42,0-672.13,0-672.13H283.12z"/>
                    <path className="st1" d="M283.12,45.36H114c0,0-64.16,459.71,0,672.13h161.78h14.66h161.78c64.16-212.42,0-672.13,0-672.13H283.12z"/>
                    <polygon className="st2" points="444.02,704.72 122.22,704.72 122.22,58.38 213.14,58.38 444.02,58.38 "/>
                    <rect className={selectedFerry ? "m-ferry__loader m-ferry__loader--active st4" : "m-ferry__loader st4"} x="132.57" y="717.48" width="311.45" height="100"/>
                    <path className="st8" d="M193.9,142.1c0,0,7.53-67,19.23-83.72"/>
                    <path className="st8" d="M375.68,142.1c0,0-7.53-67-19.23-83.72"/>
                    <path className="st8" d="M192.23,620.74c0,0,7.53,67,19.23,83.72"/>
                    <path className="st8" d="M374.01,620.74c0,0-7.53,67-19.23,83.72"/>
                    <g>
                        <rect x="132.57" y="34.29" className="st4" width="311.45" height="11.07"/>
                        <rect x="132.57" y="30.37" className="st6" width="311.45" height="7.84"/>
                    </g>
                </g>
                <g>
                    <path className="st3" d="M396.69,142.1c0,0-33.22,0-78.08,0c-21.75,0-46.21,0-70.98,0c-44.86,0-78.08,0-78.08,0l-47.32,33.29v407.4
                    l33.13,37.96h107.66h40.22h107.66l33.13-37.96v-407.4L396.69,142.1z"/>
                    <path className="st0" d="M396.69,199.66c0,0-33.22,0-78.08,0c-21.75,0-46.21,0-70.98,0c-44.86,0-78.08,0-78.08,0l-47.32,26.45v323.66
                    l33.13,30.16h107.66h40.22h107.66l33.13-30.16V226.11L396.69,199.66z"/>
                    <rect x="142.5" y="541.57" className="st1" width="44.39" height="9.51"/>
                    <circle className={selectedFerry ? "m-ferry__light m-ferry__light--active st5" : "m-ferry__light st5"} cx="164.69" cy="546.33" r="9.43"/>
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