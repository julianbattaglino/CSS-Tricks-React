import './Gradients.css';

const Gradients = () => {
    return (
        <div className="grid-container background-black pt-80">

            <div className="col">
                <h2><span class="text-gradient">Text Gradient.</span></h2>
            </div>

            <div className="col">
                <h2><span class="text-gradient-2">Text Gradient.</span></h2>
            </div>

            <div className="col">
                <h2 class="gradient-text">Text Gradient</h2>
            </div>

            <div className="col">
                <h2 class="rainbow-text">Rainbow Text</h2>
            </div>

        </div>
    )
}

export default Gradients;