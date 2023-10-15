import TopCard from '../topcard/TopCard'
import './topcardContainer.css'
import shoe1 from "../../assets/animations/Nike-red-animation.json"
import shoe2 from "../../assets/animations/ShoeN-animation.json"
import shoe3 from "../../assets/animations/casual-animation.json"
import shoe4 from "../../assets/animations/nike-bnw-animation.json"
import shoe5 from "../../assets/animations/sneakers-animation.json"
function TopcardContainer() {
  return (
    <div className='topcardContainer'>
        <TopCard category={"Athletic shoes"} imageUrl={shoe1}/>
        <TopCard category={"Spots shoes"} imageUrl={shoe2}/>
        <TopCard category={"Running shoes"} imageUrl={shoe3}/>
        <TopCard category={"Causal shoes"} imageUrl={shoe4}/>
        <TopCard category={"Sneakers shoes"} imageUrl={shoe5}/>
    </div>
  )
}

export default TopcardContainer