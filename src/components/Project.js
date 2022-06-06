
import Carousel from "react-elastic-carousel"
import Cart from "./Cart"

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
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
     </Carousel>
     </div>
     </div>
        
    )
}

export default Project