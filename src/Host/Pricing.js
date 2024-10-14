import { useOutletContext } from "react-router-dom"

export default function Pricing() {
    const van = useOutletContext()
    return (
        <p style={{marginLeft: '20px',fontSize: '23px'}}>{van.price}<span style={{fontSize: '18px'}}>$</span></p>
    )
}