
import Carousel from "react-elastic-carousel"
import Api from "./ProjectApi"
import { useState } from "react"


const breakpoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]
const Project = () =>{
    const [data,setData] = useState(Api)
    return (
    <div className="main">
     <div className="main_caurasel">
     <Carousel breakPoints={breakpoints}>
     {
        data.map((curElem)=>{
            return (
                <>
                <div className="cart">
        <div className="title_decription">
            <p className="title">{curElem.title}</p>
            <p className="description"> {curElem.description}
            </p>
        </div>
        <div className="icons_visit">
            <div className="icons">
            <p className="icon">{curElem.icon1}</p>
            <p className="icon">{curElem.icon2}</p>
            <p className="icon">{curElem.icon3}</p>
            </div>
            <div className="visit">
                <button><a href={curElem.link} target="_blank">Visit Project</a></button>
            </div>
    </div>
    </div>
                </>
            )
        })
     }
     </Carousel>
     </div>
     </div>
        
    )
}

export default Project