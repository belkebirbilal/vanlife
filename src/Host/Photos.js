import { useOutletContext } from "react-router-dom"

export default function Photos() {
    const van = useOutletContext()
    return (
        <img style={{width: '100px',borderRadius: '10px',marginLeft: '20px'}} src={van.imageUrl} alt={van.name} />
    )
}