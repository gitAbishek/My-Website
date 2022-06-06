import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { NavLink } from "react-router-dom"
const Navbar = () =>{
    
    return(
        <>
        <div className="main_list">
        <ul className="list">
                <li className="social_item"><a href="https://www.facebook.com/rock.ey.549" className="link" target="_blank"><FaFacebook/></a></li>
                <li className="social_item"><a href="https://github.com/gitAbishek" className="link" target="_blank"><FaGithub/></a></li>
                <li className="social_item"><a href="https://www.linkedin.com/in/abishek-shah/" className="link" target="_blank"><FaLinkedinIn/></a></li>
        </ul>
        <ul className="list">
        <li className="list_items">
            <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li className="list_items">
            <NavLink to="/about" className="link">About</NavLink>
            </li>
            <li className="list_items">
            <NavLink to="/project" className="link">Project</NavLink>
            </li>
            <li className="list_items">
            <NavLink to="/contact" className="link">Contact</NavLink>
            </li>
        </ul>
        
        </div>
        </>
    )
}

export default Navbar