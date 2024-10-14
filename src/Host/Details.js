import { useOutletContext } from "react-router-dom"

export default function Detail() {
    const van = useOutletContext()
    return (
        <>
            <p style={{marginBlock: '20px',marginLeft: '20px'}}>Name: {van.name}</p>
            <p style={{marginBlock: '20px',marginLeft: '20px'}}>Category: {van.type}</p>
            <p style={{marginLeft: '20px'}}>{van.description}</p>
        </>
    )
}