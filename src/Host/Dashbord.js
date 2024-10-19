import { Link , useLoaderData } from "react-router-dom"
export default function Dashbord() {
    const data = useLoaderData()
    return (
        <div className="dashbord">
            <div className="welcome">
                <h2>Welcome!</h2>
                <p>income last <span style={{textDecoration: 'underline'}}>30 days</span></p>
                <h1>$2,260</h1>
            </div>
            <div className="review">
                <h3>Review score 5.0/5</h3>
            </div>
            <div className="listedVans" >
            {data.map(van => {
                return (
                    <Link
                        to={`/host/${van.id}`}
                        state={{type: van.type}}
                        relative="path"
                        key={van.id}
                        className="host-van-link-wrapper"
                        >
                        <div className="host-van-single" key={van.id}>
                            <img src={van.imageUrl} alt='host-van-detail' />
                            <div className="host-van-info">
                                <h3>{van.name}</h3>
                                <p>${van.price}/day</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}