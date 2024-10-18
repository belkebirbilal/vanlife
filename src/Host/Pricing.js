import { useOutletContext } from "react-router-dom"

export default function Pricing() {
    const {currentVan} = useOutletContext()
    return (
        <p style={{marginLeft: '20px',fontSize: '23px'}}>{currentVan.price}<span style={{fontSize: '18px'}}>$</span></p>
    )
}