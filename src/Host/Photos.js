import { useOutletContext } from "react-router-dom"

export default function Photos() {
    const {currentVan} = useOutletContext()
    return (
        <img style={{width: '100px',borderRadius: '10px',marginLeft: '20px'}} src={currentVan.imageUrl} alt={currentVan.name} />
    )
}