import { useParams , Link , useLocation} from 'react-router-dom'
import './VansDetails.css'

export default function VansDetails({data}) {
    const {id} = useParams()
    const location = useLocation()
    const searchParam = location.state.type
    const vandetails = data.find(el => el.id === id)
    if (!data) {
        return <h1>loading...</h1>
    }
    return (
        <div className="van-detail-container">
            <Link
                to={`..${searchParam ? `?type=${searchParam}` : ""}`}
                relative="path"
                className="back-button"
            >&larr; <span>{`Back to ${searchParam ? `${searchParam}` : "all"} vans`}</span></Link>
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