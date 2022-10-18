import './GradientComponents.css';
import Highlight from 'react-highlight'
import '../../assets/css/stackoverflow-dark.css';

const GradientComponents = () => {
    return (
        <div className="grid-container background-black">

            <div className="col">
                <h2><span class="text-gradient">Text Gradient.</span></h2>
                <Highlight className='html'>
                    {'<h2><span class="text-gradient">Text Gradient.</span></h2>'}
                </Highlight>
            </div>

            <div className="col">
                <h2><span class="text-gradient-2">Text Gradient.</span></h2>
                <Highlight className='html'>
                    {'<h2><span class="text-gradient-2">Text Gradient.</span></h2>'}
                </Highlight>

            </div>

            <div className="col">
                <h2 class="gradient-text">Text Gradient</h2>
                <Highlight className='html'>
                    {'<h2><span class="text-gradient-2">Text Gradient.</span></h2>'}
                </Highlight>
            </div>

            <div className="col">
                <h2 class="rainbow-text">Rainbow Text</h2>
                <Highlight className='html'>
                    {'<h2><span className="fancy-underline-gradient underline-regular">Regular Fancy underline</span></h2>'}
                </Highlight>
            </div>

        </div>
    )
}

export default GradientComponents;