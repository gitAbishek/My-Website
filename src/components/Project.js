import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import Carousel from "react-elastic-carousel"


const breakpoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]
const Project = () =>{
    return (
    <div className="main">
     <div className="main_caurasel">
     <Carousel breakPoints={breakpoints}>
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
                <button><a href="https://webdeveloperabishek.netlify.app" target="_blank">Visit Project</a></button>
            </div>
    </div>
    </div>
    <div className="cart">
        <div className="title_decription">
            <p className="title">GitHub Api</p>
            <p className="description">created app where i have fetched the github users from the api 
            </p>
        </div>
        <div className="icons_visit">
            <div className="icons">
            <p className="icon"><FaHtml5/></p>
            <p className="icon"><FaCss3/></p>
            <p className="icon"><FaReact/></p>
            </div>
            <div className="visit">
                <button><a href="https://githubapiabishek.netlify.app" target="_blank">Visit Project</a></button>
            </div>
    </div>
    </div>

    <div className="cart">
        <div className="title_decription">
            <p className="title">FoodRecipe App</p>
            <p className="description"> created the simple api where i have fetched all the 
            category from the api. here after visiting the navbar we can find the different items in the 
            different category. 
            </p>
        </div>
        <div className="icons_visit">
            <div className="icons">
            <p className="icon"><FaHtml5/></p>
            <p className="icon"><FaCss3/></p>
            <p className="icon"><FaReact/></p>
            </div>
            <div className="visit">
                <button><a href="https://foodrecipeapishah.netlify.app" target="_blank">Visit Project</a></button>
            </div>
    </div>
    </div>

    <div className="cart">
        <div className="title_decription">
            <p className="title">FoodRecipe App</p>
            <p className="description"> created the simple api where i have fetched all the 
            category from the api. here after visiting the navbar we can find the different items in the 
            different category. 
            </p>
        </div>
        <div className="icons_visit">
            <div className="icons">
            <p className="icon"><FaHtml5/></p>
            <p className="icon"><FaCss3/></p>
            <p className="icon"><FaReact/></p>
            </div>
            <div className="visit">
                <button><a href="https://foodrecipeapishah.netlify.app" target="_blank">Visit Project</a></button>
            </div>
    </div>
    </div>
     </Carousel>
     </div>
     </div>
        
    )
}

export default Project