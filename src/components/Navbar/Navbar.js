import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="header">
                    <div className="logo"></div>
                    <div className="navigation">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/buttons"><li>Buttons</li></Link>
                        <Link to="/cards"><li>Cards</li></Link>
                        <Link to="/gradients"><li>Gradients</li></Link>
                        <Link to="/underline"><li>Underline</li></Link>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Navbar;