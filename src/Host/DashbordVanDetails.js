import { Link , useLoaderData , useLocation , useParams } from "react-router-dom"

export default function DashbordVanDetail() {
    const data = useLoaderData()
    const {id} = useParams()
    const location = useLocation()
    const searchParam = location.state.type
    const vandetails = data.find(el => el.id === id)
    return (
        <div className="van-detail-container">
            <Link
                to={`..${searchParam ? `?type=${searchParam}` : ""}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="van-detail">
                <img src={vandetails.imageUrl} alt='van-detail' />
                <i className={`van-type ${vandetails.type} selected`}>{vandetails.type}</i>
                <h2>{vandetails.name}</h2>
                <p className="van-price"><span>${vandetails.price}</span>/day</p>
                <p>{vandetails.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        </div>
    )
}