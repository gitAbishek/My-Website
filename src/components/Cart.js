import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
const Cart = () =>{
    return (
        
        <div className="cart">
        <div className="title_decription">
            <p className="title">My Website</p>
            <p className="description">This project is all about my 
            Website. where anyone can visit and know about me,
            also can see my project's as well as contact me.
            </p>
        </div>
        <div className="icons_visit">
            <div className="icons">
            <p className="icon"><FaHtml5/></p>
            <p className="icon"><FaCss3/></p>
            <p className="icon"><FaReact/></p>
            </div>
            <div className="visit">
                <button><a href="webdeveloperabishek.netlify.app" target="blank">Visit Project</a></button>
            </div>
    </div>
    </div>
    )
}

export default Cart