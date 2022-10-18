import './Cards.css';
import Highlight from 'react-highlight'
import '../../assets/css/stackoverflow-dark.css';

const Cards = () => {
    return (
        <>
            <div className="grid-container background-grey">

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
                </div>

            </div>
        </>
    )
}

export default Cards;