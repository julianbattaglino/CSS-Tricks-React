import './Buttons.css';
import '../../assets/css/stackoverflow-dark.css';


const Buttons = () => {
    return (
        <div className="grid-container background-grey">

            <div className='col'>
                <div className='btn-container'>
                    <a href="/" className="btn-base">Fancy Button
                        <span className="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            <div className="col">
                <div className='btn-container'>
                    <button className="btn-neomorphism">Neomorphism Button</button>
                </div>
            </div>

            <div className="col">
                <div className='btn-container'>
                    <button className="button button--circle">
                        <svg aria-hidden="true" className="progress" width="70" height="70" viewBox="0 0 70 70">
                            <path className="progress__circle" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"></path>
                            <path className="progress__path" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" pathLength="1"></path>
                        </svg>
                        <span>Progress</span>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className='btn-container'>
                    <button className="button button--resize"><span>Resize</span></button>
                </div>
            </div>

            <div className="col">
                <div className='btn-container'>
                    <button className="button button--stars"><span>Stars on hover</span></button>
                </div>
            </div>

            <div className="col">
                <div className='btn-container'>
                    <button className="button button--shape"><span>Shapes</span></button>
                </div>
            </div>

            <div className="col">
                <div className='btn-container'>
                    <button className="button button--out"><span>Button Out</span></button>
                </div>
            </div>

        </div>
    )
}

export default Buttons;