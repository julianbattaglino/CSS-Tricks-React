import './Intro.css';


const Intro = () => {
    return (
        <div className="intro-container pt-80">
            <h1 className="main-title">Some CSS tricks to blow your mind (or something like that)</h1>
            <div className="components-grid">
                <div className="col">
                    <h2><span className="fancy-underline-gradient underline-regular">Underline</span></h2>
                </div>
                <div className="col">
                    <div className='btn-container'>
                        <button class="btn-neomorphism btn">Buttons</button>
                    </div>
                </div>
                <div className="col">
                    <h2><span class="text-gradient-2">Text</span></h2>
                </div>

            </div>
        </div>
    )
}

export default Intro;