import "./Underline.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Underline = () => {

    const thinUnderlineHtml = `
<!-- HTML -->
<h2><span className="fancy-underline-blue underline-thin">Thin Underline</span></h2>
`
    const thinUnderlineCss = `
/* CSS */
.fancy-underline-blue {
    background-image: linear-gradient(120deg, rgba(93, 178, 254, 0.4) 0%, rgba(93, 178, 254, 0.4) 100%);
    background-repeat: no-repeat;
    background-position: 0 100%;
    transition: background-size 0.25s ease-in;
    width: fit-content;
}
`
    return (
        <>
            <div className="grid-container background-grey pt-80">
                <div className="col">
                    <h2><span className="fancy-underline-blue underline-thin">Thin Underline</span></h2>
                    <SyntaxHighlighter language="html" style={vscDarkPlus}>
                        {thinUnderlineHtml}
                    </SyntaxHighlighter>

                    <SyntaxHighlighter language="css" style={vscDarkPlus}>
                        {thinUnderlineCss}
                    </SyntaxHighlighter>
                </div>

                <div className="col">
                    <h2><span className="fancy-underline-yellow underline-light">Light Underline</span></h2>
                </div>

                <div className="col">
                    <h2><span className="fancy-underline-gradient underline-regular">Regular Underline</span></h2>
                </div>

                <div className="col">
                    <h2><span className="fancy-underline-animated">Animated Underline</span></h2>
                </div>


                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--glitch">Glitch</a>
                    </div>
                </div>

                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--drawned">
                            <span>Drawned</span>
                            <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9"><path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" /></svg>
                        </a>
                    </div>
                </div>

                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--slide--up">Slide Up</a>
                    </div>
                </div>

                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--wave">
                            <span>Wave Drawned</span>
                            <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--curve">
                            <span>Curve Drawned</span>
                            <svg className="link__graphic link__graphic--stroke link__graphic--arc" width="100%" height="18" viewBox="0 0 59 18"><path d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842" pathLength="1" /></svg>
                        </a>
                    </div>
                </div>

                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--line-through">Line Through</a>
                    </div>
                </div>

                <div className="col">
                    <div className="flex-container">
                        <a href="/" className="link link--push" data-text="Link Push">
                            <span>Link Push</span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Underline;