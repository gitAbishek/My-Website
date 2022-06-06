
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
const Contact = () =>{
    return (
        <>
          <div className="section4">
           <div className="first_section">
               <p className="title">Contact <span>Me</span></p>
               <a href="" className="email">abishekshah12315@gmail.com</a>
               <a href="" className="number">+977-9848646176</a>
               <div className="scial_icon">
                   <a href="https://www.facebook.com/rock.ey.549" className="icon" target="_blank"><FaFacebook/></a>
                   <a href="https://github.com/gitAbishek" className="icon" target="_blank"><FaGithub/></a>
                   <a href="https://www.linkedin.com/in/abishek-shah/" className="icon" target="_blank"><FaLinkedinIn/></a>
               </div>
           </div>
           <div className="second_section">
               <div className="copyright">
                   <p className="copyright_text">Copyright @ Abishek Shah. All Rights Reserved</p>
               </div>
               
           </div>
          </div>
        </>
    )
}

export default Contact