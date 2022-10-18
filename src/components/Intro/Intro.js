import './Intro.css';
import { Link } from 'react-router-dom';


const Intro = () => {
    return (
        <div className="intro-container pt-80">
            <h1 className="main-title">Some CSS tips & tricks to blow your mind (or something like that)</h1>
            <div className="components-grid">
                <div className="col">
                <Link to="/underline"><h2><span className="fancy-underline-gradient underline-regular">Underline</span></h2></Link>
                </div>
                <div className="col">
                    <div className='btn-container'>
                        <Link to="/buttons"><button class="btn-neomorphism btn">Buttons</button></Link>
                    </div>
                </div>
                <div className="col">
                <Link to="/gradients"><h2><span class="text-gradient-2">Gradients</span></h2></Link>
                </div>

            </div>
        </div>
    )
}

export default Intro;