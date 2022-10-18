import './Cards.css';
import '../../assets/css/stackoverflow-dark.css';

const Cards = () => {
    return (
        <>
            <div className="grid-container background-grey pt-80">

                <div className="col">
                    <div className="main">
                        <div className="top-bar">
                            <div className="dot red"></div>
                            <div className="dot amber"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="window">
                            <div className="content"></div>
                        </div>
                    </div>
                    <iframe scrolling="no" title="masOS Window Light" src="https://codepen.io/julianbattaglino/embed/MWGRLym?default-tab=html" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/julianbattaglino/pen/MWGRLym">
                            masOS Window Light</a> by julianbattaglino (<a href="https://codepen.io/julianbattaglino">@julianbattaglino</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>

                <div className="col">
                    <div className="main">
                        <div className="top-bar-dark">
                            <div className="dot red"></div>
                            <div className="dot amber"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="window-dark">
                            <div className="content"></div>
                        </div>
                    </div>
                    <iframe scrolling="no" title="masOS Window Dark" src="https://codepen.io/julianbattaglino/embed/ZEoZwNj?default-tab=html" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/julianbattaglino/pen/ZEoZwNj">
                            masOS Window Dark</a> by julianbattaglino (<a href="https://codepen.io/julianbattaglino">@julianbattaglino</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>

                <div className="col">
                    <div class="terminal-container">
                        <div class="terminal">
                            <div class="terminal__toolbar">
                                <div class="toolbar__buttons">
                                    <button class="toolbar__button toolbar__button--exit">&#10005;</button>
                                    <button class="toolbar__button">&#9472;</button>
                                    <button class="toolbar__button">&#9723;</button>
                                    <p class="toolbar__user">battaglino@ubuntu:~</p>
                                </div>
                            </div>
                            <div class="terminal__body">
                                <div class="terminal__prompt">
                                    <span class="prompt__user">battaglino@ubuntu:</span><span class="prompt__location">~</span><span
                                        class="prompt__dollar">$ sudo apt-get update</span>
                                    <span class="prompt__cursor"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe scrolling="no" title="Ubuntu Terminal CSS" src="https://codepen.io/julianbattaglino/embed/qBYwvLN?default-tab=html" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/julianbattaglino/pen/qBYwvLN">
                            Ubuntu Terminal CSS</a> by julianbattaglino (<a href="https://codepen.io/julianbattaglino">@julianbattaglino</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>

            </div>
        </>
    )
}

export default Cards;