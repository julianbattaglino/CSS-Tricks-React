import './Gradients.css';

const Gradients = () => {
    return (
        <div className="grid-container background-black pt-80">

            <div className="col">
                <h2><span class="text-gradient">Text Gradient.</span></h2>
            </div>

            <div className="col">
                <h2><span class="text-gradient-2">Text Gradient.</span></h2>
                <iframe scrolling="no" title="Text Gradient" src="https://codepen.io/julianbattaglino/embed/MWGLzWR?default-tab=html&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/julianbattaglino/pen/MWGLzWR">
                        Text Gradient</a> by julianbattaglino (<a href="https://codepen.io/julianbattaglino">@julianbattaglino</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>            </div>

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