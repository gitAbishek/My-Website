import { useState } from "react"
import {FaBars} from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import Navbar from "./Navbar"
const DesktopNavbar = () =>{
    const [open,setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
        <div className="header">
            <div className="logo">
                <p className="logo_title">Abishek <span>Shah</span></p> 
            </div>
            <div className="navbar">
              <Navbar/>
            </div>
            <div className="hamberger" onClick={handleClick}>
                {open ? <FaFacebook/> : <FaBars />}
            </div>
        </div>
        </>
    )
}

export default DesktopNavbar