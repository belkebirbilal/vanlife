import { Link } from 'react-router-dom'
import './Vans.css'

export default function Vans({data}) {
    const vanElements = data.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`}>
                <img src={van.imageUrl} alt="vans_image" />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return (
        <div className="van-list-container">
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}