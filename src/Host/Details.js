import { useOutletContext } from "react-router-dom"

export default function Detail() {
    const {currentVan} = useOutletContext()
    return (
        <>
            <p style={{marginBlock: '20px',marginLeft: '20px'}}>Name: {currentVan.name}</p>
            <p style={{marginBlock: '20px',marginLeft: '20px'}}>Category: {currentVan.type}</p>
            <p style={{marginLeft: '20px'}}>{currentVan.description}</p>
        </>
    )
}