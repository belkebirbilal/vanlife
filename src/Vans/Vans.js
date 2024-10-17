import { Link , useSearchParams } from 'react-router-dom'
import './Vans.css'

export default function Vans({data}) {
    const [param] = useSearchParams()
    const typeFilter = param.get('type')
    const paramBasedVans = typeFilter
        ? data.filter(el => el.type === typeFilter)
        : data
    const searchParam = {type : typeFilter}
    const vanElements = paramBasedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`} state={searchParam}>
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
            <div className="van-list-filter-buttons">
                <Link
                    to="?type=simple"
                    className={
                        `van-type simple
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</Link>
                <Link
                    to="?type=luxury"
                    className={
                        `van-type luxury
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</Link>
                <Link
                    to="?type=rugged"
                    className={
                        `van-type rugged
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</Link>
                {typeFilter ? (
                    <Link
                        to="."
                        className="van-type clear-filters"
                    >Clear filter</Link>
                ) : null}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
